// ============================================
// Nova API Foundations - Main Server File
// DecodeLabs Internship - Project 2
// Author: M. Yahya
// ============================================

// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Import custom middleware
const requestLogger = require("./middleware/requestLogger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

// Import routes
const healthRoutes = require("./routes/health");
const featuresRoutes = require("./routes/features");
const servicesRoutes = require("./routes/services");
const contactRoutes = require("./routes/contact");

// Initialize Express app
const app = express();

// ============================================
// MIDDLEWARE SETUP
// ============================================

// Enable CORS - allows frontend to talk to this API
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Custom request logger - logs every incoming request
app.use(requestLogger);

// ============================================
// ROUTES
// ============================================

// Mount all routes under /api prefix
app.use("/api", healthRoutes);
app.use("/api", featuresRoutes);
app.use("/api", servicesRoutes);
app.use("/api", contactRoutes);

// Root route - welcome message
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Nova API Foundations 🚀",
    version: "1.0.0",
    docs: "Visit /api/health to check server status",
  });
});

// ============================================
// ERROR HANDLING (must be after routes)
// ============================================

// Handle 404 - route not found
app.use(notFound);

// Global error handler
app.use(errorHandler);

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("============================================");
  console.log(`  Nova API Foundations is running!`);
  console.log(`  Server:  http://localhost:${PORT}`);
  console.log(`  Health:  http://localhost:${PORT}/api/health`);
  console.log(`  Env:     ${process.env.NODE_ENV || "development"}`);
  console.log("============================================");
});
