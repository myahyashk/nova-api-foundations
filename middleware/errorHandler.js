// ============================================
// Global Error Handler Middleware
// Catches all errors thrown in the app
// and returns a clean JSON error response
// ============================================

const errorHandler = (err, req, res, next) => {
  // Log the error to the console for debugging
  console.error(`[ERROR] ${err.message}`);

  // Use the error's status code or default to 500
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || "Internal Server Error",
      // Only show stack trace in development mode
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  });
};

module.exports = errorHandler;
