import { useState } from "react";
import { blogCategories } from "../data/blogCategories";
import { categories } from "../data/categories";

const BlogForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [form, setForm] = useState({
    id: initialData.id || "",
    slug: initialData.slug || "",
    categoryName: initialData.categoryName || "",
    description: initialData.description || "",
    placeCount: initialData.placeCount || "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };
      //generate slug only if category changes

      if (name === "categoryName") {
        const selectedCategory = categories.find(
          (cat) => String(cat.id) === value,
        );
        updated.slug = selectedCategory?.slug || "";
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

    if (!form.categoryName) {
      alert("Please fill out the Category!");
      return;
    }
    // This passes the data up to <CreateBlog />
    onSubmit(form);

    setForm({
      categoryName: "",
      description: "",
      placeCount: "",
      slug: "",
      image: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <select
        name="categoryName"
        value={form.categoryName}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>

        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        name="slug"
        placeholder="Slug"
        readOnly
        value={form.slug}
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
        name="placeCount"
        placeholder="placeCount total"
        value={form.placeCount}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input type="file" accept="image/*" onChange={handleImage} />

      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded w-full"
      >
        {isEdit ? "Update" : "Save"} Category
      </button>
    </form>
  );
};

export default BlogForm;
