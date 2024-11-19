const express = require("express");
const { getAllServices } = require("../controllers/service-controller"); // Use named export for controller functions
const router = express.Router();

// Use the correct controller function for the route
router.route("/service").get(getAllServices);

module.exports = router;
