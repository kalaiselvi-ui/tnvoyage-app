import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
