# 🔗 URL Shortener

A simple and efficient **URL Shortener** built using **Node.js**, **Express**, and **MongoDB**.  
This application shortens long URLs and tracks the **number of visits** for each generated short link.

---

## 🚀 Features

- ✂️ **Shorten Long URLs** – Instantly generate short, shareable links.
- 🔁 **Redirect Automatically** – Access the original URL by visiting the short link.
- 📊 **Track Visits** – Records the number of times a short URL is accessed.
- 🧠 **User Authentication (optional)** – Supports user-based link management.
- ⚡ **RESTful API Architecture** – Clean and modular structure for scalability.

---

## 🧱 Folder Structure

```
URL-Shortner/
│
├── controllers/ # Handles the logic for routes
│ ├── url.js # URL creation, redirection, and analytics logic
│ └── user.js # User-related controller functions
│
├── middleware/ # Middleware functions
│ └── auth.js # Authentication and request validation
│
├── models/ # Mongoose models for MongoDB
│ ├── url.js # URL schema (originalUrl, shortId, visitCount)
│ └── user.js # User schema (username, password, etc.)
│
├── routes/ # Route definitions
│ ├── static_router.js # Serves static pages or root routes
│ ├── url.js # API endpoints for URL shortening
│ └── user.js # API endpoints for user management
│
├── service/ # Reusable service modules
│ └── auth.js # Authentication helpers (JWT, tokens, etc.)
│
├── views/ # Frontend views / templates
│ └── connect.js # Database connection setup
│
└── package.json # Project configuration and dependencies
```

---


---

## ⚙️ Setup and Installation

###  Clone the Repository
```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
