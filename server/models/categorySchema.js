import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    image: {
      type: String,
      default: null,
    },
    description: String,
  },
  { timestamps: true },
);

// auto slug
// ✅ Corrected for modern Mongoose
categorySchema.pre("save", function () {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, {
      lower: true,
      strict: true,
    });
  }
  // No next() needed! Mongoose automatically knows when you're done.
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
