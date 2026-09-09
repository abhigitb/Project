const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn, upload.single("listing[image][url]"), (req, res, next) => {
        if (req.file) {
            req.body.listing.image = {
                url: req.file.path
            };
        }
        next(); },
        validateListing, wrapAsync(listingController.createListing));


//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image][url]"),
    async (req, res, next) => {
        if (req.file) {
            req.body.listing.image = {
                url: req.file.path
            };
        }
        next();
    },
    validateListing,
    wrapAsync(listingController.updateListing)
)
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isOwner, isLoggedIn, wrapAsync(listingController.renderEditForm));

module.exports = router;