import cloudinary from "../config/cloudinary.js";
import Category from "../models/categorySchema.js";
import { uploadToCloudinary } from "../utils/upload.js";

const createCategory = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const result = await uploadToCloudinary(req.file.buffer);

    const category = await Category.create({
      name: req.body.name,
      description: req.body.description,
      image: result.secure_url,
    });

    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const editCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category)
      return res.status(400).json({ message: "Category not found" });

    let newImage = category.image;

    if (req.file) {
      let uploaded = await uploadToCloudinary(req.file.buffer);

      if (!uploaded || !uploaded.secure_url) {
        return res.status(500).json({ message: "Upload failed" });
      }

      if (category.public_id) {
        await cloudinary.uploader.destroy(category.public_id);
      }

      newImage = uploaded.secure_url;
      category.public_id = uploaded.public_id;
    }
    category.name = name ?? category.name;
    category.description = description ?? category.description;
    category.image = newImage ?? null;

    await category.save();
    res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ success: true, data: categories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.deleteOne({ _id: id }); //if i use deleteOne, findOne need to be object
    //if we use findById findIdanddelete findbyidand upate we dont need to pass as object just use (id)

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export { createCategory, editCategory, deleteCategory, getAllCategory };
