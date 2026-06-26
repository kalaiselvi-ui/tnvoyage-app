// pages/admin/Destinations.jsx

import { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDestination } from "../../../context/DestinationContext.jsx";
import { toast } from "react-toastify";

const AdminDestination = () => {
  const navigate = useNavigate();
  const { destinations, getAllDestination, loading, deleteDestination } =
    useDestination();
  // const [destination, setDestination] = useState(() => {
  //   const saved = localStorage.getItem("mock_destination");
  //   return saved ? JSON.parse(saved) : [];
  // });

  useEffect(() => {
    getAllDestination();
  }, []);

  const handleDeleteBlog = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this destination?",
    );
    if (!confirmed) return;
    try {
      await deleteDestination(id);
      toast.success("Destination deleted successfully");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to delete destination",
      );
    }
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Destination</h1>

        <button
          onClick={() => navigate("create-destination")}
          className="w-full sm:w-auto bg-secondary text-white px-4 py-2 rounded-lg"
        >
          Add Destination
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {destinations.map((dest) => (
              <tr className="border-b" key={dest._id}>
                <td className="p-4">
                  {dest.image ? (
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-16 h-10 object-cover rounded-lg border border-gray-200"
                    />
                  ) : (
                    <div className="w-16 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                      No Img
                    </div>
                  )}
                </td>
                <td className="p-4">{dest.name}</td>
                <td className="p-4">{dest.location}</td>
                <td className="p-4">{dest.category.name}</td>
                <td className="p-4">
                  <button
                    onClick={() => navigate(`edit-destination/${dest._id}`)}
                    className="text-blue-500 mr-3"
                    aria-label="edit-icon"
                  >
                    <MdEdit size={20} />
                  </button>

                  <button
                    className="text-red-500"
                    aria-label="delete-icon"
                    onClick={() => handleDeleteBlog(dest._id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDestination;
