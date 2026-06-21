// pages/admin/AdminDashboard.jsx

import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Blogs</h3>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Destinations</h3>
          <p className="text-3xl font-bold">8</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">Categories</h3>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Quick Actions</h2>

        <div className="flex gap-4 flex-wrap">
          <Link
            to="/admin-dashboard/blogs"
            className="bg-secondary text-white px-4 py-2 rounded-lg"
          >
            Manage Blogs
          </Link>

          <Link
            to="/admin-dashboard/categories"
            className="bg-secondary text-white px-4 py-2 rounded-lg"
          >
            Manage Categories
          </Link>

          <Link
            to="/admin-dashboard/destinations"
            className="bg-secondary text-white px-4 py-2 rounded-lg"
          >
            Manage Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
