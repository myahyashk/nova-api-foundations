// ============================================
// Response Utility
// Standardizes all API responses
// ============================================

/**
 * Send a success response
 */
const sendSuccess = (res, data, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Send an error response
 */
const sendError = (res, message = "Something went wrong", statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    error: { message },
  });
};

module.exports = { sendSuccess, sendError };
