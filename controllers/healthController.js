// ============================================
// Health Controller
// Handles the /api/health endpoint
// Used to check if the server is running
// ============================================

const { sendSuccess } = require("../utils/response");

const getHealth = (req, res) => {
  sendSuccess(res, {
    status: "OK",
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  }, "Server is healthy and running");
};

module.exports = { getHealth };
