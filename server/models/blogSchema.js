import mongoose from "mongoose";
import slugify from "slugify";
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    catName: {
      type: String,
      enum: ["Travel Guide", "Food", "Adventure", "Budget Tips", "Hidden Gem"],
      required: true,
    },

    image: String,

    shortDesc: String,

    description: String,
    readTime: {
      type: String,
      default: "3 mins",
    },
    author: {
      type: String,
      default: "admin",
    },
    travelInfo: [
      {
        type: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    places: [String],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

blogSchema.pre("save", async function () {
  if (this.isModified("title")) {
    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slugExists = await mongoose.models.Blog.findOne({
      slug: baseSlug,
    });
    if (slugExists) {
      baseSlug = baseSlug + "-" + Date.now();
    }
    this.slug = baseSlug;
  }
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
