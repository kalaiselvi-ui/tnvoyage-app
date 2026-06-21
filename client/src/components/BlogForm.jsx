import { useState } from "react";
import { blogCategories } from "../data/blogCategories";

const BlogForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [form, setForm] = useState({
    id: initialData.id || "",
    title: initialData.title || "",
    description: initialData.description || "",
    categoryId: initialData.categoryId || "",
    readTime: initialData.readTime || "",
    slug: initialData.slug || "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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

    if (!form.title || !form.categoryId) {
      alert("Please fill out the Title and Category!");
      return;
    }
    // This passes the data up to <CreateBlog />
    onSubmit(form);

    setForm({
      title: "",
      description: "",
      categoryId: "",
      readTime: "",
      slug: "",
      image: "",
    });
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
        name="slug"
        placeholder="Slug"
        value={form.slug}
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

      <select
        name="categoryId"
        value={form.categoryId}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>

        {blogCategories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        name="readTime"
        placeholder="Read Time (e.g 5 min read)"
        value={form.readTime}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input type="file" accept="image/*" onChange={handleImage} />

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
