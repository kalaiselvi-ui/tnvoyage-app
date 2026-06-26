import React, { useState } from "react";
import CategoryForm from "../../../components/CategoryForm";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../../context/CategoryContext.jsx";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const navigate = useNavigate();
  const { addCategory } = useCategory();

  const handleSubmit = async (data) => {
    // const existingCategory = JSON.parse(
    //   localStorage.getItem("mock_category") || "[]",
    // );

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      if (data.image) {
        formData.append("image", data.image);
      }
      const createCategory = await addCategory(formData);
      if (createCategory) {
        toast.success("Category Created Successfully");
        navigate("/admin-dashboard/categories");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create category");
    }

    // const newCategory = {
    //   id: Date.now(),
    //   categoryName: data.categoryName,
    //   description: data.description,
    //   placeCount: data.placeCount,
    //   slug: data.slug,
    //   image: data.image ? URL.createObjectURL(data.image) : null,
    // };

    // const updated = [...existingCategory, newCategory];
    // console.log("FINAL SAVED DATA:", updated);

    // localStorage.setItem("mock_category", JSON.stringify(updated));
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Destination</h2>
      <CategoryForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateCategory;
