# Backend

This project is a backend application built with Node.js, Express, and MongoDB. It includes user registration functionality with validation and password hashing.

## Table of Contents

- [Database Connection](#database-connection)
- [Server Creation](#server-creation)
- [User Schema](#user-schema)
- [Endpoints](#endpoints)
  - [POST /users/register](#post-usersregister)

## Database Connection

The database connection is established using Mongoose. The connection details are specified in the `.env` file.

### Code

The database connection is implemented in `db/db.js`:

```javascript
const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Error connecting to DB", error);
    });
}

module.exports = connectToDb;

The connection is initialized in app.js:

Server Creation
The server is created using the http module and Express.

Code
The server creation is implemented in server.js:

User Schema
The user schema is defined using Mongoose and includes fields for fullname, email, password, and socketID. It also includes methods for generating authentication tokens and comparing passwords.

Code
The user schema is implemented in models/user.model.js:

Endpoints
POST /users/register
This endpoint registers a new user. It validates the input data, hashes the password, and creates a new user in the database.

Request
URL: /users/register
Method: POST
Headers: Content-Type: application/json
Body:
Response
Status Code: 201 Created
Body:
Example using Postman
Open Postman.
Create a new POST request.
Set the URL to http://localhost:3000/users/register.
Set the Content-Type header to application/json.
In the body, select raw and paste the following JSON:
Send the request and you should receive a response with a status code of 201 Created and a JSON body containing the token and user details.
User Service
The user service handles the creation of new users.

Code
The user service is implemented in services/user.service.js:

License
This project is licensed under the ISC License. ```

Similar code found with 1 license type - View matches
