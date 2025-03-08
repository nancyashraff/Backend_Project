# Backend Development for Hospital Information System (HIS)

## 1. Overview
This backend system is designed for a Hospital Information System (HIS) with role-based access for administrators, doctors, and patients. The system is built using Node.js and Express.js, with MongoDB as the database. The backend includes user authentication, middleware for error handling, and role-based API endpoints.

## 2. Technologies Used
- **Node.js**: Runtime environment for JavaScript on the server.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing hospital data.
- **Mongoose**: ODM (Object Data Modeling) for MongoDB.
- **JWT (JSON Web Tokens)**: Used for authentication.
- **Bcrypt.js**: Used for password hashing.
- **CORS**: Middleware to allow cross-origin requests.

## 3. Environment Configuration (.env file)
The `.env` file stores sensitive configuration data, including:
- **PORT=3000**: Defines the server port.
- **MONGO_URI=mongodb://localhost:27017/**: Connection string for MongoDB.
- **JWT_SECRET**: Secret key for signing JWT tokens.
- **JWT_EXPIRES_IN=7d**: Token expiration time.
- **BCRYPT_SALT=10**: Salt rounds for password hashing.

## 4. Server Setup (index.js)
- Loads environment variables using `dotenv`.
- Initializes an Express app and sets up middleware for CORS and JSON parsing.
- Defines API routes for authentication, admin, doctor, and patient functionalities.
- Uses a custom error-handling middleware.
- Connects to MongoDB using Mongoose and starts the server.

## 5. API Routes
- **/api/auth**: Handles user authentication.
- **/api/admin**: Provides endpoints for admin functionalities.
- **/api/doctor**: Manages doctor-related operations.
- **/api/patient**: Manages patient-related operations.

## 6. Dependencies (package.json)
- **bcryptjs**: For hashing passwords.
- **express**: Framework for building the server.
- **jsonwebtoken**: For user authentication.
- **mongoose**: For interacting with MongoDB.
