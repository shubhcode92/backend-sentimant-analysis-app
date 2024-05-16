# Cantact Detail

    Name:      Shubham Sahu
    Mobile No. +91 7354844644
    Email:     shubhamsahu9290@gmail.com

# Architecture Overview:
    The backend server application is built using Node.js with Express.js framework for handling HTTP requests. MongoDB is used as the NoSQL database for storing textual data for sentiment analysis and binary files for file storage. Passport.js is used for implementing authentication with JWT (JSON Web Tokens). The application follows a modular structure with separate routes, controllers, and models for different functionalities.

# API Endpoints:

## Authentication:
    1. POST /api/auth/register: Register a new user.
    2. POST /api/auth/login: Login with username and password.
    3. GET /api/auth/logout: Logout and invalidate the authentication token.

# Running the Application Locally:
## Start the Server:
    1. cd backend-sentiment-analysis-app
    2. node app.js