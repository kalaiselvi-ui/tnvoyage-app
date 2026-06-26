import { useState } from "react";
import { blogCategories } from "../data/blogCategories";

const BlogForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setForm] = useState({
    title: initialData.title || "",
    shortDesc: initialData.shortDesc || "",
    description: initialData.description || "",
    catName: initialData.catName || "",
    readTime: initialData.readTime || "",
    slug: initialData.slug || "",
    image: "",
    travelInfo: initialData.travelInfo || [
      { type: "season", label: "Best Season", value: "" },
      { type: "budget", label: "Budget", value: "" },
      { type: "duration", label: "Duration", value: "" },
      { type: "location", label: "Location", value: "" },
    ],
    places: Array.isArray(initialData.places)
      ? initialData.places.join(", ")
      : initialData.places || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // auto slug only when name changes
      if (name === "title") {
        updated.slug = value
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
      }
      return updated;
    });
  };

  const handleTravelInfoChange = (type, value) => {
    setForm((prev) => ({
      ...prev,
      travelInfo: prev.travelInfo.map((item) =>
        item.type === type ? { ...item, value } : item,
      ),
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setForm({
      ...form,
      image: file,
    });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      ...form,
      places: form.places.split(",").map((place) => place.trim()),
    };
    // This passes the data up to <CreateBlog />
    onSubmit(blogData);

    setForm({
      title: "",
      description: "",
      catName: "",
      readTime: "",
      slug: "",
      image: "",
      shortDesc: "",
      places: "",
      travelInfo: [
        { type: "season", label: "Best Season", value: "" },
        { type: "budget", label: "Budget", value: "" },
        { type: "duration", label: "Duration", value: "" },
        { type: "location", label: "Location", value: "" },
      ],
    });
    setImagePreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="shortDesc"
        placeholder="shortDesc"
        value={form.shortDesc}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="slug"
        placeholder="Slug"
        value={form.slug}
        readOnly
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="catName"
        placeholder="Eg... Travel Guide,  Hidden Gem"
        onChange={handleChange}
        className="w-full border p-2 rounded"
        value={form.catName}
      />

      <input
        name="readTime"
        placeholder="Read Time (e.g 5 min read)"
        value={form.readTime}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Best Season"
        value={form.travelInfo.find((i) => i.type === "season")?.value || ""}
        className="w-full border p-2 rounded"
        onChange={(e) => handleTravelInfoChange("season", e.target.value)}
      />

      <input
        name="budget"
        placeholder="Budget"
        value={form.travelInfo.find((i) => i.type === "budget")?.value || ""}
        onChange={(e) => handleTravelInfoChange("budget", e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Duration"
        value={form.travelInfo.find((i) => i.type === "duration")?.value || ""}
        onChange={(e) => handleTravelInfoChange("duration", e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Location"
        value={form.travelInfo.find((i) => i.type === "location")?.value || ""}
        onChange={(e) => handleTravelInfoChange("location", e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        name="places"
        placeholder="Places (comma separated)"
        value={form.places}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <div className="flex items-start gap-4">
        <input type="file" accept="image/*" onChange={handleImage} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="preview"
            className="w-20 h-20 object-cover mt-3 rounded"
          />
        )}
      </div>
      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded w-full"
      >
        {isEdit ? "Update" : "Save"} Blog
      </button>
    </form>
  );
};

export default BlogForm;
