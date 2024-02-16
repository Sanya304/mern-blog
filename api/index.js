import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(express.json());
const PORT = 3000;

mongoose
  .connect(
    "mongodb+srv://sanya:sanya@mern-blog.ibpim0c.mongodb.net/?retryWrites=true&w=majority"
  )

  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
