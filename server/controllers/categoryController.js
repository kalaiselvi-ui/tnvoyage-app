import Category from "../models/categorySchema.js";

const createCategory = async (req, res) => {
  try {
    const { name, slug, description } = req.body;

    const { image } = req.file.path;

    const category = await Category.create({
      name,
      slug,
      description,
      image,
    });
    res
      .status(201)
      .json({ message: "New Category created", newCategory: category });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
