const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/devops", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/health", (req, res) => {
  res.send("Backend is healthy");
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});

