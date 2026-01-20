const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection (via env variable)
const mongoUrl = process.env.MONGO_URL;

async function connectDB() {
  if (!mongoUrl) {
    console.log("MONGO_URL not set. Running without MongoDB");
    return;
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

// Call DB connection
connectDB();

// Health check endpoint
app.get("/health", (req, r
