# Nova API Foundations

Backend API project developed during the Decode Labs Internship using Node.js and Express.js. Focused on learning REST APIs, routing, middleware, validation, and backend fundamentals.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```

### 3. Run in development mode
```bash
npm run dev
```

### 4. Run in production mode
```bash
npm start
```

Server runs on `http://localhost:5000` by default.

---

## 📁 Project Structure

```
nova-api-foundations/
├── server.js              # Main entry point
├── package.json           # Project config & scripts
├── .env.example           # Environment variable template
├── .gitignore
├── routes/                # Route definitions
│   ├── health.js
│   ├── features.js
│   ├── services.js
│   └── contact.js
├── controllers/           # Business logic
│   ├── healthController.js
│   ├── featuresController.js
│   ├── servicesController.js
│   └── contactController.js
├── middleware/            # Custom middleware
│   ├── requestLogger.js
│   ├── errorHandler.js
│   └── notFound.js
└── utils/                 # Utility functions
    ├── validator.js
    └── response.js
```

---

## 📡 API Endpoints

### GET `/api/health`
Check if the server is running.

**Response:**
```json
{
  "success": true,
  "message": "Server is healthy and running",
  "data": {
    "status": "OK",
    "uptime": "12s",
    "timestamp": "2026-06-25T10:00:00.000Z",
    "environment": "development"
  }
}
```

---

### GET `/api/features`
Get a list of Nova's features.

**Response:**
```json
{
  "success": true,
  "message": "Features retrieved successfully",
  "data": [
    {
      "id": 1,
      "title": "Responsive Design",
      "description": "Fully responsive UI built with HTML, CSS, and Vanilla JS.",
      "icon": "layout"
    }
  ]
}
```

---

### GET `/api/services`
Get a list of available services.

**Response:**
```json
{
  "success": true,
  "message": "Services retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Frontend Development",
      "description": "Building responsive and accessible user interfaces.",
      "stack": ["HTML", "CSS", "JavaScript", "React"],
      "status": "active"
    }
  ]
}
```

---

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "M. Yahya",
  "email": "myahya@example.com",
  "message": "Hello, I would like to get in touch!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Message received successfully! We will get back to you soon.",
  "data": {
    "name": "M. Yahya",
    "email": "myahya@example.com",
    "message": "Hello, I would like to get in touch!",
    "submittedAt": "2026-06-25T10:00:00.000Z"
  }
}
```

**Validation Error Response (400):**
```json
{
  "success": false,
  "error": {
    "message": "Validation failed",
    "details": [
      "Name is required and must be at least 2 characters.",
      "A valid email address is required."
    ]
  }
}
```

---

## ✅ Validation Rules

| Field   | Rule                                      |
|---------|-------------------------------------------|
| name    | Required, minimum 2 characters            |
| email   | Required, must be a valid email format    |
| message | Required, minimum 10 characters           |

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Environment:** dotenv
- **CORS:** cors
- **Dev Tool:** nodemon

---

## 👨‍💻 Author

**M. Yahya**  
CS Student @ BBSUTSD Khairpur  
DecodeLabs Internship — Batch 2026
