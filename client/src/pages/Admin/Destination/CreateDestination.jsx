import React, { useEffect } from "react";
import DestinationForm from "../../../components/DestinationForm";
import { useNavigate } from "react-router-dom";
import { useDestination } from "../../../context/DestinationContext.jsx";
import { toast } from "react-toastify";

const CreateDestination = () => {
  const { addDestination } = useDestination();
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("slug", data.slug);
      formData.append("category", data.category);
      formData.append("location", data.location);
      formData.append("description", data.description);
      formData.append("shortDesc", data.shortDesc);
      formData.append("bestTime", data.bestTime);
      formData.append("budget", data.budget);
      formData.append("rating", data.rating);

      //places array
      data.places.forEach((place) => formData.append("places", place));
      //image
      if (data.image) {
        formData.append("image", data.image);
      }

      const createdDestination = await addDestination(formData);
      if (createdDestination) {
        toast.success("New Destination Created Successfully");
        navigate("/admin-dashboard/destinations");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to create destination",
      );
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Destination</h2>
      <DestinationForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateDestination;
