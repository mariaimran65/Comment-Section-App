import express from "express";
import connectDB from "./db.js";
import commentModel from "./Models/comment.js";
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());

// Use your API routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
