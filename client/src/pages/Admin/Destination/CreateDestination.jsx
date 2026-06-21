import React from "react";
import DestinationForm from "../../../components/DestinationForm";
import { useNavigate } from "react-router-dom";

const CreateDestination = () => {
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    const existingDestination = JSON.parse(
      localStorage.getItem("mock_destination") || "[]",
    );

    const newDestination = {
      id: Date.now(),
      name: data.name,
      slug: data.slug,
      category: data.category,
      location: data.location,
      rating: data.rating,
      shortDescription: data.shortDescription,
      description: data.description,
      bestTime: data.bestTime,
      budget: data.budget,
      places: data.places ? data.places.join(", ") : "",
      image: data.image ? URL.createObjectURL(data.image) : null,
    };
    localStorage.setItem(
      "mock_destination",
      JSON.stringify([...existingDestination, newDestination]),
    );
    navigate("/admin-dashboard/destinations");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Destination</h2>
      <DestinationForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateDestination;
