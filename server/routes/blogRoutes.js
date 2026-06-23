import "../env.js";
import express from "express";
import { isAdmin } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";
import {
  createBlog,
  deleteBlog,
  editBlog,
  getAllBlog,
} from "../controllers/blogController.js";

const blogRoutes = express.Router();

// 2. Add upload.single("image") directly into the route sequence
blogRoutes.post(
  "/create",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  createBlog,
);

blogRoutes.put(
  "/edit/:id",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  editBlog,
);

blogRoutes.get("/", getAllBlog);

blogRoutes.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);

export default blogRoutes;
