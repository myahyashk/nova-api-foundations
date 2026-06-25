// ============================================
// Features Route
// GET /api/features
// ============================================

const express = require("express");
const router = express.Router();
const { getFeatures } = require("../controllers/featuresController");

router.get("/features", getFeatures);

module.exports = router;
