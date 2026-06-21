import React from "react";
import CategoryForm from "../../../components/CategoryForm";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    const existingCategory = JSON.parse(
      localStorage.getItem("mock_category") || "[]",
    );
    const newCategory = {
      id: Date.now(),
      categoryName: data.categoryName,
      description: data.description,
      placeCount: data.placeCount,
      slug: data.slug,
      image: data.image ? URL.createObjectURL(data.image) : null,
    };

    const updated = [...existingCategory, newCategory];
    console.log("FINAL SAVED DATA:", updated);

    localStorage.setItem("mock_category", JSON.stringify(updated));

    navigate("/admin-dashboard/categories");
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Destination</h2>
      <CategoryForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateCategory;
