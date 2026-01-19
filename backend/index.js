const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection (optional)
const mongoUrl = process.env.MONGO_URL;

if (mongoUrl) {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
    });
} else {
  console.log("MONGO_URL not set. Running without MongoDB");
}

// Health check
app.get("/health", (req, res) => {
  res.send("Backend is healthy");
});

// Start server
app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
