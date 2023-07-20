# PW Blogs (Backend)

<img src="https://pwblog.vercel.app/logo192.png" alt="logo" width="100" height="100" /> 

## Description

This project is a backend of PW blog web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to create, read, update, and delete blog posts. Users can also register, log in, and manage their own blog posts securely.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- User registration and authentication.
- Create and explore the lists of blogs.
- Explore blogs created by other users.
- View detailed information for each blog post.
- Update and Delete the lists of blogs created by yourself.

## Demo

Check out the live demo of the PW Blogs application here: [PW Blogs Demo](https://pwblog.vercel.app/)

## Installation

1. Clone the repository: `git clone https://github.com/vishal-kumaar/pw-blog-backend`
2. Navigate to the project directory: `cd pw-blog-backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in this project's root directory with the keys and values as follow.
    ```plaintext
   PORT=enterPort;
   MONGODB_URI=enterMongoURI
   JWT_SECRET=enterJwtSecret
   JWT_EXPIRY=enterJwtExpiry
   ALLOWED_ORIGINS=AllowedOriginsSepreatedByComma

## Usage

1. Start the server: `npm start`
2. Open your web browser and visit: `http://localhost:${yourPort}`
3. Register for a new account or log in if you already have one.
4. Explore and create your lists of blogs.
5. Share your blogs with friends and get inspired by theirs!

## API Endpoints

These are the API endpoints with their descriptions.

- `POST /api/user/register`: To register new user.

- `POST /api/user/login`: To login already existing user.

- `POST /api/blog/add`: To add a new blog.<br>
  **Note:** It requires authentication header with token.

- `GET /api/blog`: To get list of all the blogs.

- `GET /api/myblog`: To get list of all the blogs related to the user.<br>
  **Note:** It requires authentication header with token.

- `GET /api/blog/:blogId`: To get blog data for specific blog id.

- `PATCH /api/blog/:blogId`: To update a specific blog by blog id.<br>
  **Note:** It requires authentication header with token.

- `DELETE /api/blog/:blogId`: To delete a specific blog by blog id.<br>
  **Note:** It requires authentication header with token.

## Technologies Used

- Express.js - Backend web framework.
- MongoDB - Database for storing user and blog data.
- Mongoose - Object Data Modeling (ODM) library for MongoDB.
- Bcrypt.js - Library for hashing and salting passwords.
- Cors - Middleware for enabling CORS (Cross-Origin Resource Sharing).
- Dotenv - Environment variable management.
- Jsonwebtoken - Library for generating and validating JSON Web Tokens (JWT).
- Morgan - HTTP request logger middleware for Node.js.
- Nodemon - Development tool for automatically restarting Node.js applications upon file changes during development.

## Contributing

We warmly welcome contributions from the community! If you wish to contribute to the PW Blog app or find any issues, please don't hesitate to raise them.

Feel free to customize this template to fit your project's specific needs. A well-crafted README.md file can help users understand your project better, encourage contributions, and showcase your work effectively. Happy coding!

## Contact

- **Linkedin :-** https://www.linkedin.com/in/vishal-kumar-909758228/
- **Gmail :-** vishal.kumar08376@gmail.com