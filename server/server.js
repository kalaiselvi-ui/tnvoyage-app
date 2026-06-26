import dotenv from "dotenv";

dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://tnvoyage-app.vercel.app",
    ],
    credentials: true,
  }),
);
// app.use(bodyParser.json({ limit: "10mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

connectDB();

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/destination", destinationRoutes);
app.use("/api/blog", blogRoutes);

app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
