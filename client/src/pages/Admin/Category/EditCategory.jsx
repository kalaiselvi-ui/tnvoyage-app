import React from "react";
import CategoryForm from "../../../components/CategoryForm";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = JSON.parse(localStorage.getItem("mock_category") || "[]");
  const currentCategory = category.find((cat) => String(cat.id) === String(id));
  console.log(currentCategory);

  if (!currentCategory) return;
  const handleSubmit = (data) => {
    const updatedCategory = category.map((cat) => {
      if (cat.id === currentCategory.id) {
        return {
          ...cat,
          ...data,
          image:
            data.image instanceof File
              ? URL.createObjectURL(data.image)
              : cat.image,
        };
      }
      return cat;
    });
    localStorage.setItem("mock_category", JSON.stringify(updatedCategory));
    navigate("/admin-dashboard/categories");
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
