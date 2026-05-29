# FM2026 API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a valid JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Login
- **Endpoint**: `POST /auth/login`
- **Access**: Public
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "staff"
    }
  }
  ```

#### Logout
- **Endpoint**: `POST /auth/logout`
- **Access**: Private
- **Response**: `{ "message": "Logged out successfully" }`

#### Refresh Token
- **Endpoint**: `POST /auth/refresh`
- **Access**: Private
- **Response**: `{ "token": "new_jwt_token" }`

### Status Management

#### Get All Staff Statuses
- **Endpoint**: `GET /status`
- **Access**: Private (Admin/Supervisor only)
- **Query Parameters**:
  - `department`: Filter by department
  - `status`: Filter by status
- **Response**:
  ```json
  {
    "data": [
      {
        "id": "status_id",
        "user_id": "user_id",
        "user_name": "John Doe",
        "status": "available",
        "notes": "Ready to assist",
        "updated_at": "2024-05-29T10:00:00Z"
      }
    ]
  }
  ```

#### Get Current User Status
- **Endpoint**: `GET /status/me`
- **Access**: Private
- **Response**:
  ```json
  {
    "data": {
      "id": "status_id",
      "status": "available",
      "notes": "Ready to assist",
      "updated_at": "2024-05-29T10:00:00Z"
    }
  }
  ```

#### Update Status
- **Endpoint**: `POST /status/update`
- **Access**: Private
- **Request Body**:
  ```json
  {
    "status": "available",
    "notes": "Ready to assist"
  }
  ```
- **Valid Status Values**:
  - `available`
  - `on_break`
  - `assigned_task`
  - `sick_leave`
  - `training`
  - `other`

#### Get Status History
- **Endpoint**: `GET /status/history`
- **Access**: Private
- **Query Parameters**:
  - `limit`: Number of records (default: 10)
  - `offset`: Skip records (default: 0)
- **Response**:
  ```json
  {
    "data": [
      {
        "id": "status_id",
        "status": "available",
        "notes": "Ready to assist",
        "created_at": "2024-05-29T10:00:00Z"
      }
    ]
  }
  ```

### Staff Management (Admin Only)

#### Get All Staff
- **Endpoint**: `GET /staff`
- **Access**: Private (Admin only)
- **Query Parameters**:
  - `department`: Filter by department
  - `role`: Filter by role
- **Response**:
  ```json
  {
    "data": [
      {
        "id": "user_id",
        "email": "user@example.com",
        "name": "John Doe",
        "department": "Operations",
        "role": "staff",
        "created_at": "2024-05-29T10:00:00Z"
      }
    ]
  }
  ```

#### Create Staff Member
- **Endpoint**: `POST /staff`
- **Access**: Private (Admin only)
- **Request Body**:
  ```json
  {
    "email": "newstaff@example.com",
    "password": "initialpassword123",
    "name": "Jane Smith",
    "department": "Operations",
    "role": "staff"
  }
  ```
- **Response**: `201 Created`

#### Update Staff Member
- **Endpoint**: `PUT /staff/:id`
- **Access**: Private (Admin only)
- **Request Body**:
  ```json
  {
    "name": "Jane Smith",
    "department": "Maintenance",
    "role": "staff"
  }
  ```

#### Delete Staff Member
- **Endpoint**: `DELETE /staff/:id`
- **Access**: Private (Admin only)
- **Response**: `204 No Content`

## Error Responses

All error responses follow this format:
```json
{
  "error": "Error message here",
  "code": "ERROR_CODE"
}
```

### Common Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error
