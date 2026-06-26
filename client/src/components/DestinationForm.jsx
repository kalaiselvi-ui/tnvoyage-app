import { useEffect, useState } from "react";
import { useCategory } from "../context/CategoryContext.jsx";

const DestinationForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const { categories, getCategories } = useCategory();

  const [imagePreview, setImagePreview] = useState(null);

  // normalize category safely
  const normalizeCategory = (cat) => {
    if (!cat) return "";
    if (typeof cat === "string") return cat;
    return cat._id || "";
  };

  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "",
    location: "",
    rating: "",
    shortDesc: "",
    description: "",
    bestTime: "",
    budget: "",
    places: "",
    image: "",
  });

  // load categories
  useEffect(() => {
    getCategories();
  }, []);

  // sync edit data safely
  useEffect(() => {
    if (!initialData) return;

    setForm({
      name: initialData.name || "",
      slug: initialData.slug || "",
      category: normalizeCategory(initialData.category),
      location: initialData.location || "",
      rating: initialData.rating || "",
      shortDesc: initialData.shortDesc || "",
      description: initialData.description || "",
      bestTime: initialData.bestTime || "",
      budget: initialData.budget || "",
      places: Array.isArray(initialData.places)
        ? initialData.places.join(", ")
        : initialData.places || "",
      image: "",
    });

    if (initialData.image) {
      setImagePreview(initialData.image);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value, // ALWAYS string (important)
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FINAL SAFE DATA
    const destinationData = {
      ...form,
      category: String(form.category), // 🔥 FORCE STRING ID
      places: form.places ? form.places.split(",").map((p) => p.trim()) : [],
    };

    onSubmit(destinationData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl">
      {/* NAME */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Destination Name"
        className="w-full border p-2 rounded"
      />

      {/* SLUG */}
      <input
        name="slug"
        value={form.slug}
        readOnly
        className="w-full border p-2 rounded"
      />

      {/* CATEGORY */}
      <select
        name="category"
        value={form.category} // 🔥 MUST BE ID ONLY
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* LOCATION */}
      <input
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full border p-2 rounded"
      />

      {/* RATING */}
      <input
        name="rating"
        value={form.rating}
        onChange={handleChange}
        placeholder="Rating"
        className="w-full border p-2 rounded"
      />

      {/* SHORT DESC */}
      <textarea
        name="shortDesc"
        value={form.shortDesc}
        onChange={handleChange}
        placeholder="Short Description"
        className="w-full border p-2 rounded"
      />

      {/* DESCRIPTION */}
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Full Description"
        className="w-full border p-2 rounded"
      />

      {/* BEST TIME */}
      <input
        name="bestTime"
        value={form.bestTime}
        onChange={handleChange}
        placeholder="Best Time"
        className="w-full border p-2 rounded"
      />

      {/* BUDGET */}
      <input
        name="budget"
        value={form.budget}
        onChange={handleChange}
        placeholder="Budget"
        className="w-full border p-2 rounded"
      />

      {/* PLACES */}
      <input
        name="places"
        value={form.places}
        onChange={handleChange}
        placeholder="Places (comma separated)"
        className="w-full border p-2 rounded"
      />

      {/* IMAGE */}
      <input type="file" onChange={handleImage} />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="preview"
          className="w-24 h-24 object-cover rounded"
        />
      )}

      {/* SUBMIT */}
      <button className="bg-secondary text-white w-full py-2 rounded">
        {isEdit ? "Update" : "Create"} Destination
      </button>
    </form>
  );
};

export default DestinationForm;
