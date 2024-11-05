require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const errormiddleware = require("./middlewares/error-middleware");

app.use(express.json()); // Middleware to parse JSON request bodies

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173", // Update if frontend is on a different port
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    allowedHeaders: "Content-Type, Authorization", // Allow necessary headers
    credentials: true,
};
app.use(cors(corsOptions));

// Define routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRouter);

// Error handling middleware
app.use(errormiddleware);

const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
});
