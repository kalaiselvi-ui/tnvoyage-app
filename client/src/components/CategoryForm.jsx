import { useEffect, useState } from "react";
import { useCategory } from "../context/CategoryContext.jsx";

const CategoryForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const { categories } = useCategory();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    image: "",
  });

  // populate form when editing
  useEffect(() => {
    if (!initialData) return;

    const data = initialData.category || initialData; // 👈 IMPORTANT FIX

    setForm({
      name: data.name || "",
      slug: data.slug || "",
      description: data.description || "",
      image: "",
    });

    if (data.image) {
      setImagePreview(data.image);
    }
  }, [initialData?.id, initialData?.name]);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      // generate slug when category changes
      if (name === "name") {
        updated.slug = value.toLowerCase().trim().replace(/\s+/g, "-");
      }

      return updated;
    });
  };

  // image change
  const handleImage = (e) => {
    const file = e.target.files[0];

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert("Please select a category");
      return;
    }

    onSubmit(form);

    if (!isEdit) {
      setForm({
        name: "",
        slug: "",
        description: "",
        image: "",
      });
      setImagePreview(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      {/* CATEGORY Name */}
      <input
        name="name"
        type="text"
        placeholder="Category Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* SLUG */}
      <input
        name="slug"
        readOnly
        placeholder="Slug"
        value={form.slug}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* DESCRIPTION */}
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* IMAGE */}
      <div className="flex items-center gap-4">
        <input type="file" accept="image/*" onChange={handleImage} />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="preview"
            className="w-20 h-20 object-cover rounded"
          />
        )}
      </div>

      <button className="bg-secondary text-white px-4 py-2 rounded w-full">
        {isEdit ? "Update" : "Create"} Category
      </button>
    </form>
  );
};

export default CategoryForm;
