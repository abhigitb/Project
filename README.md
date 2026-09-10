# Wanderer 🏡

Wanderer is a full-stack accommodation listing web application inspired by Airbnb. It allows users to explore, search, create, update and manage property listings, along with reviews, ratings and location-based maps.

## 🌐 Live Demo

(https://project-zuhx.onrender.com)

## ✨ Features

- User registration, login and logout
- Secure session-based authentication
- Create, edit and delete property listings
- Listing image upload using Cloudinary
- Default image support when no image is uploaded
- Search listings by title, description, location and country
- Interactive search with clear-search functionality
- Mapbox integration for displaying listing locations
- Automatic location geocoding using Mapbox
- Add ratings and reviews to listings
- Users can delete only their own reviews
- Only listing owners can edit or delete their listings
- Automatic deletion of reviews when a listing is deleted
- Joi-based input validation
- Flash messages for success and error feedback
- Responsive design for desktop, tablet and mobile
- Mobile-friendly hamburger navigation
- Mobile-specific authentication navigation
- Horizontally scrollable category filters on mobile
- Responsive two-column review layout
- GST/tax display toggle on listing prices
- Custom 404/error page
- Privacy Policy and Terms & Conditions pages
- Deployed on Render with MongoDB Atlas

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap
- EJS
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Security
- Passport.js
- Express Session
- Connect-Mongo
- Joi Validation

### External Services
- Mapbox
- Cloudinary

### Deployment
- GitHub
- Render
- MongoDB Atlas

## 📱 Responsive Design

Wanderlust is designed to work across different screen sizes.

- Responsive navbar
- Mobile hamburger menu
- Mobile search bar
- Mobile authentication controls
- Responsive listing cards
- Scrollable category filters
- Responsive listing details and maps
- Two-column review cards on mobile

## 🔍 Search System

The search system allows users to find listings based on:

- Listing title
- Description
- Location
- Country

Search results are displayed dynamically and the searched term remains visible in the search bar. A clear button allows users to return to the complete listings page.

## 🗺️ Map Integration

Mapbox is integrated into the application to display the geographical location of each listing.

The application uses Mapbox Geocoding to convert the location entered by the user into geographical coordinates, which are then used to display the listing on the map.

## 🔐 Authentication & Authorization

The application uses Passport.js and sessions for authentication.

Authorization is implemented to ensure:

- Only logged-in users can create listings.
- Only listing owners can edit or delete their listings.
- Only review authors can delete their reviews.
- Protected routes cannot be accessed by unauthorized users.

## ☁️ Image Upload

Cloudinary is used for storing listing images.

The application also supports listings without an uploaded image by automatically using a default image.
