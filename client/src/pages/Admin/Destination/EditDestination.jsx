import React from "react";
import DestinationForm from "../../../components/DestinationForm";
import { useNavigate, useParams } from "react-router-dom";

const EditDestination = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const destination = JSON.parse(
    localStorage.getItem("mock_destination") || "[]",
  );

  const currentDestination = destination.find(
    (d) => String(d.id) === String(id),
  );
  if (!currentDestination) return;

  const handleSubmit = (data) => {
    const updatedDestination = destination.map((destination) => {
      if (destination.id === currentDestination.id) {
        return {
          ...destination,
          ...data,
          image:
            data.image instanceof File
              ? URL.createObjectURL(data.image)
              : blog.image,
        };
      }
      return destination;
    });
    localStorage.setItem(
      "mock_destination",
      JSON.stringify(updatedDestination),
    );
    // 4. Redirect
    navigate("/admin-dashboard/destinations");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Edit Destination</h2>
      <DestinationForm
        onSubmit={handleSubmit}
        isEdit={true}
        initialData={currentDestination}
      />
    </div>
  );
};

export default EditDestination;
