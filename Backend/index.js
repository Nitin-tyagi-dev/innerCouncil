const express = require("express");
const mongoose = require("mongoose");
const Debate = require("./models/Debate"); 
const debateRoutes = require("./routes/debateRoutes"); 
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/debateDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Debate Decision Helper backend!");
});

app.use("/api/debates", debateRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
