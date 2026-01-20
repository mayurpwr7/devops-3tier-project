const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection (via env variable)
const mongoUrl = process.env.MONGO_URL;

async function connectDB() {
  console.log("connectDB() called");

  if (!mongoUrl) {
    console.log("MONGO_URL not set. Running without MongoDB");
    return;
  }

  try {
    console.log("Attempting MongoDB connection...");
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

// Call DB connection
connectDB();

// Health check endpoint
app.get("/health", (req, res) => {
  res.send("Backend is healthy");
});

// Root endpoint (optional but helpful)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
