// ============================================
// Contact Controller
// Handles POST /api/contact
// Validates input and returns a response
// ============================================

const { validateContactForm } = require("../utils/validator");
const { sendSuccess, sendError } = require("../utils/response");

const submitContact = (req, res) => {
  const { name, email, message } = req.body;

  // Validate the incoming data
  const { isValid, errors } = validateContactForm({ name, email, message });

  // If validation fails, return 400 Bad Request
  if (!isValid) {
    return res.status(400).json({
      success: false,
      error: {
        message: "Validation failed",
        details: errors,
      },
    });
  }

  // If validation passes, return 201 Created
  sendSuccess(
    res,
    {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    },
    "Message received successfully! We will get back to you soon.",
    201
  );
};

module.exports = { submitContact };
