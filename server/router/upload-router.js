const express = require("express");
const router = express.Router();  // Define the router instance

const uploadController = require("../controllers/upload-controller");  // Import the upload controller
const multer = require("multer");
var path = require("path");
// Define multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploadedsong"); // Adjust the directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure a unique filename
  },
});

const upload = multer({ storage });
// Define the POST route for /upload
// router.route("/upload").post(upload);
router.route("/upload").post(upload.single("songFile"), uploadController);

module.exports = router;  // Export the router
