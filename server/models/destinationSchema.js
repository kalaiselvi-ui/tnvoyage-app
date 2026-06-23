import mongoose from "mongoose";
import slugify from "slugify";

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    image: String,

    description: String,

    places: [String],

    bestTime: String,

    budget: String,
    location: String,

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

destinationSchema.pre("save", async function () {
  if (this.isModified("name")) {
    let baseSlug = slugify(this.name, { lower: true, strict: true });
    let slugExists = await mongoose.models.Destination.findOne({
      slug: baseSlug,
    });
    if (slugExists) {
      baseSlug = baseSlug + "-" + Date.now();
    }
    this.slug = baseSlug;
  }
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
