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

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
    },

    image: String,

    excerpt: String,

    content: String,

    author: {
      type: String,
      default: "Admin",
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

blogSchema.pre("save", async function (next) {
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
