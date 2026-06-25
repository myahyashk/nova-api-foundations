// ============================================
// 404 Not Found Middleware
// Runs when no route matches the request
// ============================================

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    },
  });
};

module.exports = notFound;
