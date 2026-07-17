import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://arcgpt.vercel.app",
      "https://arcgpt-git-main-ayannvermaa-7134s-projects.vercel.app",
    ],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  }),
);

app.use("/api", chatRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch (err) {
    console.error("Failed to connect with DB:", err);
  }
};

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);
  await connectDB();
});
