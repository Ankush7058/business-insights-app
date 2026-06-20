# Business Insights Mobile App

A full-stack mobile application that simulates a Business Insights Dashboard similar to Google Business Profile. The application allows users to log in, view business details, insights metrics, and customer reviews through a React Native mobile app powered by a Node.js backend and MongoDB database.

## Features

### Authentication

* User Login with Email and Password

### Business Profile

* Business Name
* Category
* Address
* Phone Number
* Rating
* Total Reviews

### Insights Dashboard

* Profile Views
* Search Views
* Website Clicks
* Phone Calls
* Direction Requests

### Reviews

* Reviewer Name
* Rating
* Comment
* Date

## Tech Stack

### Mobile Application

* React Native (Expo)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Deployment

* Backend: Render

## Project Structure

```text
business-insights-app/
│
├── mobile/          # React Native Application
├── backend/         # Node.js Express Backend
├── README.md
└── BusinessInsights.postman_collection.json
```

## API Endpoints

### Login

```http
POST /login
```

### Business Details

```http
GET /api/business
```

### Insights

```http
GET /api/insights
```

### Reviews

```http
GET /api/reviews
```

## Live Backend API

```text
https://business-insights-app-xe6a.onrender.com
```

## Example Endpoints

```text
https://business-insights-app-xe6a.onrender.com/api/business
```

```text
https://business-insights-app-xe6a.onrender.com/api/insights
```

```text
https://business-insights-app-xe6a.onrender.com/api/reviews
```

## Local Setup

### Clone Repository

```bash
git clone https://github.com/Ankush7058/business-insights-app.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Mobile Setup

```bash
cd mobile
npm install
npx expo start
```

## Database

MongoDB Atlas is used for storing:

* Users
* Business Details
* Insights
* Reviews

## APK Installation

1. Download the APK file.
2. Transfer it to an Android device.
3. Enable "Install from Unknown Sources" if required.
4. Install and launch the application.

## Postman Collection

The project includes a Postman collection for API testing:

```text
BusinessInsights.postman_collection.json
```

## GitHub Repository

```text
https://github.com/Ankush7058/business-insights-app
```

## Author

Ankush Pandit
