import cloudinary from "../config/cloudinary.js";
import Category from "../models/categorySchema.js";
import Destination from "../models/destinationSchema.js";
import { uploadToCloudinary } from "../utils/upload.js";

const createDestination = async (req, res) => {
  try {
    const {
      name,
      description,
      places,
      budget,
      bestTime,
      category,
      location,
      shortDesc,
      rating,
    } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name & description field required" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }
    const result = await uploadToCloudinary(req.file.buffer);

    let destination = await Destination.create({
      name,
      description,
      budget,
      places: Array.isArray(places) ? places.join(",") : places,
      bestTime,
      shortDesc,
      category: category,
      rating,
      location,
      image: result.secure_url,
    });
    // 2. Populate the category name so the frontend receives the string/object immediately
    const populatedDestination = await destination.populate("category", "name");
    return res.status(201).json({
      message: "New Destination Created",
      data: populatedDestination,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllDestination = async (req, res) => {
  try {
    const destination = await Destination.find().populate("category", "name");
    if (!destination)
      return res.status(404).json({
        success: false,
        message: "Destination Not Found",
      });
    return res.status(200).json({ success: true, destination });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const editDestination = async (req, res) => {
  try {
    const {
      name,
      description,
      places,
      budget,
      bestTime,
      category,
      rating,
      location,
      shortDesc,
    } = req.body;
    const { id } = req.params;
    const destination = await Destination.findById(id);
    if (!destination)
      return res
        .status(400)
        .json({ success: false, message: "Destination Not Found" });

    let newImage = destination.image;
    if (req.file) {
      let uploaded = await uploadToCloudinary(req.file.buffer);

      if (!uploaded || !uploaded.secure_url) {
        return res.status(500).json({ message: "Upload failed" });
      }

      if (destination.public_id) {
        await cloudinary.uploader.destroy(destination.public_id);
      }

      newImage = uploaded.secure_url;
      destination.public_id = uploaded.public_id;
    }
    destination.name = name ?? destination.name;
    destination.description = description ?? destination.description;
    destination.places = Array.isArray(places)
      ? places.join(",")
      : (places ?? destination.places);
    destination.budget = budget ?? destination.budget;
    destination.bestTime = bestTime ?? destination.bestTime;
    destination.shortDesc = shortDesc ?? destination.shortDesc;
    destination.rating = rating ?? destination.rating;
    destination.location = location ?? destination.location;
    destination.image = newImage;
    destination.category = category ?? destination.category;

    await destination.save();

    const updatedDestination = await destination.populate("category", "name");

    return res.status(200).json({
      success: true,
      message: "Destination edited Successfully",
      data: updatedDestination,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const destination = await Destination.findByIdAndDelete(id);
    if (!destination)
      return res.status(400).json({
        success: false,
        message: "Destination Not Found",
      });
    return res.status(200).json({
      success: true,
      message: "Destination deleted successfully",
      destination,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export {
  createDestination,
  getAllDestination,
  editDestination,
  deleteDestination,
};
