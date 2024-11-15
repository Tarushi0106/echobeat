const express = require("express");
const multer = require("multer");
const { z } = require("zod");
const path = require("path");

// Initialize the express app
const app = express();

// File upload configuration using multer
const storage = multer.memoryStorage(); // Store file in memory (for GridFS, you could store on disk if needed)
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size of 10 MB
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /audio\/(mp3|wav|ogg)/; // Allowed audio types
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (mimeType) {
      return cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only MP3, WAV, and OGG are allowed."), false);
    }
  },
}).single("songFile"); // 'songFile' is the field name in the form

// Zod Validation for signup
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not exceed 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not exceed 255 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters" })
    .max(20, { message: "Phone must not exceed 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024, { message: "Password can't exceed 1024 characters" }),
  // Add file validation schema
  songFile: z
    .any()
    .refine((file) => file && file.mimetype && file.mimetype.startsWith("audio/"), {
      message: "File must be an audio file",
    })
    .refine((file) => file && file.size <= 10 * 1024 * 1024, {
      message: "File must not exceed 10MB",
    }),
});

// Signup Route with File Upload
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    try {
      // Validate the form data and file using zod
      signupSchema.parse({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        songFile: req.file, // the file object from multer
      });

      // After validation, you can save to MongoDB or perform other actions
      res.status(200).json({ message: "Song and user data uploaded successfully!" });
    } catch (validationError) {
      return res.status(400).json({ message: validationError.errors[0].message });
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
