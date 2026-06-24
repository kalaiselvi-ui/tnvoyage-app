import Blog from "../models/blogSchema.js";
import { uploadToCloudinary } from "../utils/upload.js";

const createBlog = async (req, res) => {
  try {
    const {
      title,
      blogCategory,
      shortDesc,
      description,
      author,
      image,
      readTime,
      places,
      travelInfo,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Name & description field required" });
    }

    let parsedTravelInfo = [];
    if (!travelInfo) {
      return res.json(400).json({ message: "Travel Info not found" });
    }
    if (travelInfo) {
      parsedTravelInfo = JSON.parse(travelInfo);
    }

    const result = await uploadToCloudinary(req.file.buffer);
    const blog = await Blog.create({
      title,
      blogCategory,
      shortDesc,
      description,
      author,
      readTime,
      places: Array.isArray(places) ? places.join(",") : places,
      travelInfo: parsedTravelInfo,
      image: result.secure_url,
    });
    return res
      .status(201)
      .json({ success: true, message: "New Blog Created", data: blog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const editBlog = async (req, res) => {
  try {
    const {
      title,
      blogCategory,
      shortDesc,
      description,
      author,
      image,
      readTime,
      places,
      travelInfo,
    } = req.body;
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    let newImage = blog.image;
    if (req.file) {
      let uploaded = await uploadToCloudinary(req.file.buffer);
      if (!uploaded || !uploaded.secure_url) {
        return res.status(500).json({ message: "Upload failed" });
      }
      if (blog.public_id) {
        await cloudinary.uploader.destroy(blog.public_id);
      }
      newImage = uploaded.secure_url;
      blog.public_id = uploaded.public_id;
    }

    blog.title = title ?? blog.title;
    blog.blogCategory = blogCategory ?? blog.blogCategory;
    blog.shortDesc = shortDesc ?? blog.shortDesc;
    blog.description = description ?? blog.description;
    blog.readTime = readTime ?? blog.readTime;
    blog.author = author ?? blog.author;
    blog.image = newImage ?? null;
    blog.places = Array.isArray(places)
      ? places.join(",")
      : (places ?? blog.places);
    blog.travelInfo = travelInfo ? JSON.parse(travelInfo) : blog.travelInfo;

    const updatedBlog = await blog.save();

    return res.status(201).json({
      success: true,
      message: "Updated Blog Successfully",
      data: updatedBlog,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    if (!blog) {
      return res.status(400).json({ message: "Blog Not Found" });
    }

    return res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(400).json({ message: "Blog Not Found" });
    }

    return res.status(201).json({
      success: true,
      message: "Blog Deleted Successfully",
      blog,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export { createBlog, editBlog, getAllBlog, deleteBlog };
