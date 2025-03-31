# Reference Image
![Screenshot 2025-03-31 154137](https://github.com/user-attachments/assets/9ceedf78-b2c5-453d-85e7-93a268c66bbf)
![Screenshot 2025-03-31 154125](https://github.com/user-attachments/assets/f6f182bb-dff5-48de-b2e6-c1ace01ef88b)


# User API Documentation

## Register User
Register a new user in the system.

**URL**: `/users/register`

**Method**: `POST`

**Request Body**:
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

**Validation Rules**:
- `firstname`: Minimum 3 characters
- `email`: Must be a valid email format
- `password`: Minimum 6 characters

**Success Response**:
- **Code**: 201 Created
- **Content**:
```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string"
    },
    "token": "JWT_TOKEN"
}
```

**Example**:
```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response**:
- **Code**: 400 Bad Request
- **Content**:
```json
{
    "errors": [
        {
            "param": "field_name",
            "msg": "error message"
        }
    ]
}
```

**Example**:
```json
{
    "errors": [
        {
            "param": "email",
            "msg": "Invalid email format"
        },
        {
            "param": "password",
            "msg": "Password must be at least 6 characters long"
        }
    ]
}
```

## Login User
Login an existing user.

**URL**: `/users/login`

**Method**: `POST`

**Request Body**:
```json
{
    "email": "string",
    "password": "string"
}
```

**Validation Rules**:
- `email`: Must be a valid email format
- `password`: Minimum 6 characters

**Success Response**:
- **Code**: 200 OK
- **Content**:
```json
{
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string"
    },
    "token": "JWT_TOKEN"
}
```

**Example**:
```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response**:
- **Code**: 401 Unauthorized
- **Content**:
```json
{
    "message": "Invalid email or password"
}
```

## Get User Profile
Get the profile of the authenticated user.

**URL**: `/users/profile`

**Method**: `GET`

**Authentication**: Required (JWT Token in Authorization header or cookies)

**Success Response**:
- **Code**: 200 OK
- **Content**:
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string"
}
```

**Example**:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com"
}
```

**Error Response**:
- **Code**: 401 Unauthorized
- **Content**:
```json
{
    "message": "Unauthorized"
}
```

## Logout User
Logout the currently authenticated user.

**URL**: `/users/logout`

**Method**: `GET`

**Authentication**: Required (JWT Token in Authorization header or cookies)

**Success Response**:
- **Code**: 200 OK
- **Content**:
```json
{
    "message": "Logged out successfully"
}
```

**Error Response**:
- **Code**: 401 Unauthorized
- **Content**:
```json
{
    "message": "Unauthorized"
}
```

# Captain API Documentation

## Register Captain
Register a new captain in the system.

**URL**: `/captains/register`

**Method**: `POST`

**Request Body**:
```json
{
    "fullname": {
        "firstname": "string", // min 3 characters
        "lastname": "string"   // optional
    },
    "email": "string",        // must be valid email format
    "password": "string",     // min 6 characters
    "vehicle": {
        "color": "string",    // min 3 characters
        "plate": "string",    // min 3 characters
        "capacity": "number", // min 1
        "vehicleType": "string" // must be: "car" | "motorcycle" | "auto"
    }
}
```

**Success Response**:
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    },
    "token": "JWT_TOKEN" // valid for 24 hours
}
```

**Example**:
```json
{
    "captain": {
        "fullname": {
            "firstname": "Mike",
            "lastname": "Smith"
        },
        "email": "mike.smith@example.com",
        "vehicle": {
            "color": "black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response**:
- **Code**: 400 Bad Request
- **Content**:
```json
{
    "errors": [
        {
            "param": "field_name",
            "msg": "error message"
        }
    ]
}
```

**Example**:
```json
{
    "errors": [
        {
            "param": "vehicle.vehicleType",
            "msg": "Invalid vehicle type"
        },
        {
            "param": "vehicle.capacity",
            "msg": "Capacity must be atleast 1"
        }
    ]
}
```

## Login Captain
**URL**: `/captains/login`
**Method**: `POST`

**Request Body**:
```json
{
    "email": "string",    // must be valid email
    "password": "string"  // min 6 characters
}
```

**Success Response**:
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    },
    "token": "JWT_TOKEN" // stored in cookies and valid for 24 hours
}
```

**Error Response**:
```json
{
    "message": "Invalid email or password"
}
```

## Get Captain Profile
**URL**: `/captains/profile`
**Method**: `GET`
**Authentication**: Required (JWT Token in Authorization header or cookies)

**Success Response**:
```json
{
    "captain": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "vehicle": {
            "color": "string",
            "plate": "string",
            "capacity": "number",
            "vehicleType": "string"
        }
    }
}
```

**Error Response**:
```json
{
    "message": "Unauthorized" // when token is invalid or missing
}
```

## Logout Captain
**URL**: `/captains/logout`
**Method**: `GET`
**Authentication**: Required (JWT Token in Authorization header or cookies)

**Success Response**:
```json
{
    "message": "Logout successfully"
}
```

**Error Response**:
```json
{
    "message": "Unauthorized" // when token is invalid or missing
}
```

**Notes**:
- All routes return 401 Unauthorized if the authentication token is invalid
- Tokens are blacklisted on logout and cannot be reused
- Vehicle type must be one of: "car", "motorcycle", "auto"
- All passwords are hashed before storage
- Email addresses must be unique in the system

