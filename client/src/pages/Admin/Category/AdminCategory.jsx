// pages/admin/Categories.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../../data/categories";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import { useCategory } from "../../../context/CategoryContext.jsx";
import { toast } from "react-toastify";

const AdminCategory = () => {
  const navigate = useNavigate();
  const { categories, getCategories, loading, deleteCategory } = useCategory();

  // const [category, setCategory] = useState(() => {
  //   const saved = localStorage.getItem("mock_category");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // 2. Add this useEffect to read the newly added data when navigating back
  useEffect(() => {
    // const saved = localStorage.getItem("mock_category");
    // if (saved) {
    //   setCategory(JSON.parse(saved));
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    // const currentCategory = category.filter((cat) => cat.id !== id);
    // setCategory(currentCategory);
    // localStorage.setItem("mock_category", JSON.stringify(currentCategory));
    const confirm = window.confirm(
      "Are you sure you want to delete this destination?",
    );
    if (!confirm) return;
    try {
      await deleteCategory(id);
      toast.success("Category deleted successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete category");
    }
  };
  const countMap = categories.reduce((acc, cat) => {
    acc[cat.name] = (acc[cat.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categories</h1>

        <button
          onClick={() => navigate("create-category")}
          className="bg-secondary text-white px-4 py-2 rounded-lg"
        >
          Add Category
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Place Count</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories?.map((cat) => {
              const placeCount = countMap[cat.name] || 0;
              return (
                <tr className="border-b" key={cat._id}>
                  <td className="p-4">
                    {cat.image ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-16 h-10 object-cover rounded-lg border border-gray-200"
                      />
                    ) : (
                      <div className="w-16 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                        No Img
                      </div>
                    )}
                  </td>
                  <td className="p-4">{cat.name}</td>
                  <td className="p-4">{placeCount}</td>
                  <td className="p-4">
                    <button
                      className="text-blue-500 mr-3"
                      aria-label="edit-icon"
                      onClick={() => navigate(`edit-category/${cat._id}`)}
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="text-red-500"
                      aria-label="delete-icon"
                      onClick={() => handleDelete(cat._id)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategory;
