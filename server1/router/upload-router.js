const express = require("express");
const router = express.Router();  // Define the router instance

const upload = require("../controllers/upload-controller");  // Import the upload controller

// Define the POST route for /upload
router.route("/upload").post(upload);

module.exports = router;  // Export the router
