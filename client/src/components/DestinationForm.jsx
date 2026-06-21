// components/DestinationForm.jsx

import { useState } from "react";

const DestinationForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    slug: initialData.slug || "",
    category: initialData.category || "",
    location: initialData.location || "",
    rating: initialData.rating || "",
    shortDescription: initialData.shortDescription || "",
    description: initialData.description || "",
    bestTime: initialData.bestTime || "",
    budget: initialData.budget || "",
    places: Array.isArray(initialData.places)
      ? initialData.places.join(", ")
      : initialData.places || "",
    image: "",
  });

  const categoryOptions = [
    "Hill Stations",
    "Waterfalls",
    "Temples",
    "Beaches",
    "Nature",
    "Food Trails",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // auto slug only when name changes
      if (name === "name") {
        updated.slug = value
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
      }

      return updated;
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const destinationData = {
      ...form,
      places: form.places.split(",").map((place) => place.trim()),
    };

    onSubmit(destinationData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Destination Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="slug"
        readOnly
        value={form.slug}
        className="w-full border p-2 rounded"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>

        {categoryOptions.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        step="0.1"
        name="rating"
        placeholder="Rating"
        value={form.rating}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="shortDescription"
        placeholder="Short Description"
        value={form.shortDescription}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Full Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="bestTime"
        placeholder="Best Time"
        value={form.bestTime}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="budget"
        placeholder="Budget"
        value={form.budget}
        onChange={handleChange}
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

      <input type="file" accept="image/*" onChange={handleImage} />

      <button
        type="submit"
        className="bg-secondary w-full text-white px-4 py-2 rounded"
      >
        {isEdit ? "Update" : "Save"} Destination
      </button>
    </form>
  );
};

export default DestinationForm;
