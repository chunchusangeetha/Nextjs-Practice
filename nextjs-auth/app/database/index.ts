import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://chunchusangeetha:chunchusangeetha@cluster0.oai9qj5.mongodb.net/nextjs-auth?retryWrites=true&w=majority";

const connectToDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

export default connectToDB;