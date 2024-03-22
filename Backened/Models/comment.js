import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  time: String,
  user: Boolean,
});
const commentModel = mongoose.model("comments", commentSchema);

export default commentModel;
