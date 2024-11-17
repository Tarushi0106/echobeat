require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const uploadRouter = require("./router/upload-router");
const errormiddleware = require("./middlewares/error-middleware");
const adminRoute = require("./router/admin-router");

app.use(express.json()); // Middleware to parse JSON request bodies

// CORS configuration
const corsOptions = {
    origin: "http://localhost:3000", // Update to match your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
app.use(cors());
app.options("*", cors()); // Handle preflight requests

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRouter);
app.use("/api/form", uploadRouter);
app.use("/api/admin", adminRoute);

// Error handling middleware
app.use(errormiddleware);

const PORT = 5001;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
});
