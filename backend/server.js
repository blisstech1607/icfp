require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const UserSchema = new mongoose.Schema({ name: String, email: String, phone: String }, {collection: "users"});
const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
