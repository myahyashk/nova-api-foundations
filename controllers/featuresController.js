// ============================================
// Features Controller
// Returns a list of Nova's features
// ============================================

const { sendSuccess } = require("../utils/response");

const getFeatures = (req, res) => {
  const features = [
    {
      id: 1,
      title: "Responsive Design",
      description: "Fully responsive UI built with HTML, CSS, and Vanilla JS.",
      icon: "layout",
    },
    {
      id: 2,
      title: "REST API",
      description: "Clean RESTful API endpoints built with Node.js and Express.",
      icon: "server",
    },
    {
      id: 3,
      title: "Data Validation",
      description: "Input validation on all POST endpoints with clear error messages.",
      icon: "check-circle",
    },
    {
      id: 4,
      title: "Error Handling",
      description: "Centralized error handling with meaningful HTTP status codes.",
      icon: "alert-triangle",
    },
    {
      id: 5,
      title: "CORS Support",
      description: "Cross-Origin Resource Sharing enabled for frontend integration.",
      icon: "globe",
    },
  ];

  sendSuccess(res, features, "Features retrieved successfully");
};

module.exports = { getFeatures };
