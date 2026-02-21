const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

// Basic calorie dataset
const calorieDB = {
  apple: 52,
  banana: 89,
  pizza: 266,
  rice: 130,
  burger: 295
};

app.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    // For MVP: simulate AI detection
    // Later replace with real model API

    const detectedFood = "apple"; // simulate detection

    const calories = calorieDB[detectedFood] || "Unknown";

    res.json({
      food: detectedFood,
      calories: calories
    });

  } catch (err) {
    res.status(500).json({ error: "Detection failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));