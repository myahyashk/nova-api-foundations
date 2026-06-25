// ============================================
// Validation Utility
// Reusable functions for validating user input
// ============================================

/**
 * Validates an email address format
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates contact form fields
 * @param {object} data - { name, email, message }
 * @returns {object} - { isValid, errors }
 */
const validateContactForm = ({ name, email, message }) => {
  const errors = [];

  // Name validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required and must be at least 2 characters.");
  }

  // Email validation
  if (!email || !isValidEmail(email)) {
    errors.push("A valid email address is required.");
  }

  // Message validation
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("Message is required and must be at least 10 characters.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

module.exports = { isValidEmail, validateContactForm };
