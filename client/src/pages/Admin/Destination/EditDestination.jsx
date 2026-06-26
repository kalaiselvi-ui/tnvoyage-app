import React from "react";
import DestinationForm from "../../../components/DestinationForm";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDestination } from "../../../context/DestinationContext.jsx";

const EditDestination = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { editDestination, destinations } = useDestination();
  // const destination = JSON.parse(
  //   localStorage.getItem("mock_destination") || "[]",
  // );

  const currentDestination = destinations.find(
    (d) => String(d._id) === String(id),
  );
  console.log({ currentDestination });
  if (!currentDestination) return;

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("slug", data.slug);
      formData.append("category", data.category);
      formData.append("location", data.location);
      formData.append("description", data.description);
      formData.append("shortDesc", String(data.shortDesc || ""));
      formData.append("bestTime", data.bestTime);
      formData.append("rating", String(data.rating || ""));
      formData.append("budget", data.budget);
      if (data.image instanceof File) {
        formData.append("image", data.image);
      }
      const updatedDest = await editDestination(id, formData);
      if (updatedDest) {
        toast.success("Destination Edited Successfully");
        navigate("/admin-dashboard/destinations");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to create destination",
      );
    }
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
