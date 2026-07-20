import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("DB_URI exists:", !!process.env.DB_URI);

    await mongoose.connect(process.env.DB_URI || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB接続エラー:", error);
    throw error;
  }
};