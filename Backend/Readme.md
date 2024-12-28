# User Registration API Documentation

## Register User

Register a new user in the system.

### Endpoint

### Request Body

````json
{
  "fullname": {
    "firstname": "string", // minimum 3 characters
    "lastname": "string"   // optional, minimum 3 characters if provided
  },
  "email": "string",      // valid email format, minimum 5 characters
  "password": "string"    // minimum 6 characters
}{
  "token": "jwt_token_string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "_id": "string"
  }
}# User Registration API Documentation

## Register User
Register a new user in the system.

### Endpoint
### Request Body
```json
{
{
  "message": "Invalid email or password"
}{
  "email": "john.doe@example.com",
  "password": "password123"
}
}
````
