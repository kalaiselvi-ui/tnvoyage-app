import "../env.js";
import express from "express";
import { isAdmin } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../config/multer.js";
import {
  createDestination,
  deleteDestination,
  editDestination,
  getAllDestination,
} from "../controllers/destinationController.js";

const destinationRoutes = express.Router();

// 2. Add upload.single("image") directly into the route sequence
destinationRoutes.post(
  "/create",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  createDestination,
);

destinationRoutes.put(
  "/edit/:id",
  authMiddleware,
  isAdmin,
  upload.single("image"),
  editDestination,
);

destinationRoutes.get("/", getAllDestination);

destinationRoutes.delete(
  "/delete/:id",
  authMiddleware,
  isAdmin,
  deleteDestination,
);

export default destinationRoutes;
