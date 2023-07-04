
# Supplier Management System

A Supplier Management System built with React, TypeScript, Node.js, Express, and MongoDB.

## Features

- Create suppliers with name, logo, and address
- Store supplier data in MongoDB
- Frontend built with React and TypeScript
- Backend built with Node.js and Express

## Assumptions

- Logo Size: The assumed maximum file size for the logo is 2MB.
- Authentication: The system assumes that all pages and endpoints are publicly accessible. Authentication is not implemented.

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Material-UI

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account or a locally running MongoDB server

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vraspar/supplier-management.git
```

2. Navigate to the project directory:

```bash
cd supplier-management
```

3. Install frontend dependencies:

```bash
cd client
npm install
```

4. Install backend dependencies:

```bash
cd ../server
npm install
```

## Configuration

1. Create a `.env` file in the `backend` directory and configure the following environment variables:

```
MONGODB_URI=your-mongodb-connection-string
```

Replace `your-mongodb-connection-string` with the connection string for your MongoDB database.

## Usage

1. Start the backend server:

```bash
cd backend
npm start
```

The server will run on `http://localhost:3000`.

2. Start the frontend development server:

```bash
cd frontend
npm start
```

The React application will open in your browser at `http://localhost:3001`.

3. Use the application to create suppliers by filling in the required information and uploading a logo image.

## Testing

To test the backend API endpoints, you can use tools like Postman or cURL to send HTTP requests to the specified endpoints.

To test the frontend, fill in the supplier details in the form and submit it. Check the browser console for any error messages or successful response data logged.


I hope this helps! Let me know if you have any further questions.