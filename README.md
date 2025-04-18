# Valorant Scrim App

A full-stack web application built with the PERN stack (PostgreSQL, Express, React, Node.js) for managing Valorant scrims and tournaments.

## Features

- Modern, responsive user interface built with React
- Secure backend API with Express.js
- PostgreSQL database for data persistence
- Real-time updates for scrim management
- User authentication and authorization
- Tournament and match scheduling
- Team management system

## Tech Stack

### Frontend
- React
- Vite
- ESLint for code quality
- Modern JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- PostgreSQL with Neon Database
- Arcjet for security
- Helmet for HTTP security headers
- CORS for cross-origin resource sharing
- Morgan for HTTP request logging

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/danlightner/val-scrim-app.git
cd val-scrim-app
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

## Running the Application

1. Start the backend server
```bash
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Project Structure

```
val-scrim-app/
├── frontend/               # React frontend application
│   ├── src/               # Source files
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
├── backend/               # Node.js backend application
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── routes/           # API routes
│   └── server.js         # Entry point
├── .env                  # Environment variables
└── package.json          # Backend dependencies
```

## Security

- Helmet.js for secure HTTP headers
- CORS protection
- Environment variable protection
- Arcjet integration for additional security

Project Link: [https://github.com/danlightner/val-scrim-app](https://github.com/danlightner/val-scrim-app)
