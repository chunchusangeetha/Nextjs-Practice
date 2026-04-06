import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/blogDB";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined and local default failed");
}

const connectToDB = async () => {
  console.log("📌 Trying MongoDB connection with URI:", MONGODB_URI.startsWith("mongodb+srv") ? "mongodb+srv://..." : MONGODB_URI);
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
    throw err;
  }
};

export default connectToDB;
