// ============================================
// Services Controller
// Returns a list of available services
// ============================================

const { sendSuccess } = require("../utils/response");

const getServices = (req, res) => {
  const services = [
    {
      id: 1,
      name: "Frontend Development",
      description: "Building responsive and accessible user interfaces.",
      stack: ["HTML", "CSS", "JavaScript", "React"],
      status: "active",
    },
    {
      id: 2,
      name: "Backend Development",
      description: "Building RESTful APIs and server-side logic.",
      stack: ["Node.js", "Express.js"],
      status: "active",
    },
    {
      id: 3,
      name: "IoT Engineering",
      description: "Hardware and software integration using ESP32 and Arduino.",
      stack: ["ESP32", "Arduino", "C++"],
      status: "active",
    },
    {
      id: 4,
      name: "AI Integration",
      description: "Integrating AI and machine learning APIs into applications.",
      stack: ["Gemini API", "REST APIs"],
      status: "coming-soon",
    },
  ];

  sendSuccess(res, services, "Services retrieved successfully");
};

module.exports = { getServices };
