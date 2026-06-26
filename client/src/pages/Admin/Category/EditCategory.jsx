import React from "react";
import CategoryForm from "../../../components/CategoryForm";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCategory } from "../../../context/CategoryContext.jsx";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editCategory, categories } = useCategory();
  // const category = JSON.parse(localStorage.getItem("mock_category") || "[]");
  const currentCategory = categories.find(
    (cat) => String(cat._id) === String(id),
  );
  // Guard clause if data is still loading
  if (!currentCategory) {
    return <p className="text-gray-500">Loading category details...</p>;
  }

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      if (data.image instanceof File) {
        formData.append("image", data.image);
      }
      await editCategory(id, formData);
      toast.success("Category Edited Successfully");
      navigate("/admin-dashboard/categories");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create category");
    }
    // const updatedCategory = category.map((cat) => {
    //   if (cat.id === currentCategory.id) {
    //     return {
    //       ...cat,
    //       ...data,
    //       image:
    //         data.image instanceof File
    //           ? URL.createObjectURL(data.image)
    //           : cat.image,
    //     };
    //   }
    //   return cat;
    // });
    // localStorage.setItem("mock_category", JSON.stringify(updatedCategory));
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Edit Category</h2>
      <CategoryForm
        onSubmit={handleSubmit}
        isEdit={true}
        initialData={currentCategory}
      />
    </div>
  );
};

export default EditCategory;
