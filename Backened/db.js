import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://mariaimran787898:Maria123@cluster0.3ztda6b.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
