// ============================================
// Request Logger Middleware
// Logs every incoming HTTP request with
// method, URL, and timestamp
// ============================================

const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(`[${timestamp}] ${method} ${url}`);

  // Call next() to pass control to the next middleware/route
  next();
};

module.exports = requestLogger;
