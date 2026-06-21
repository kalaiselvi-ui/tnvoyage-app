// pages/admin/AdminLayout.jsx

import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const AdminLayout = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  let name = "Saravana";
  const navClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg ${
      isActive ? "bg-secondary text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      {/* Sidebar */}
      <aside
        className={`fixed lg:static
      top-0 left-0
      h-screen w-64
      bg-white border-r p-4
      z-50
      transition-transform
      ${showSidebar ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-8">TNVoyage</h1>
        <button className="lg:hidden" onClick={() => setShowSidebar(false)}>
          <HiX className="text-2xl" />
        </button>

        <div className="flex flex-col gap-2">
          <NavLink to="/admin-dashboard" end className={navClass}>
            Dashboard
          </NavLink>

          <NavLink to="/admin-dashboard/blogs" className={navClass}>
            Blogs
          </NavLink>

          <NavLink to="/admin-dashboard/categories" className={navClass}>
            Categories
          </NavLink>

          <NavLink to="/admin-dashboard/destinations" className={navClass}>
            Destinations
          </NavLink>
        </div>
        {/* Go back to website */}
        <div className="mt-10 pt-4 border-t">
          <Link to="/" className="text-secondary font-medium">
            ← View Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="h-16 border-b px-4 md:px-6 bg-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={() => setShowSidebar(true)} className="lg:hidden">
              <HiMenu className="text-2xl" />
            </button>

            <h2 className="font-semibold text-lg">Admin Panel</h2>
          </div>

          <p className="hidden md:block">
            Welcome
            <span className="pl-2 text-green">{name}! 🎉</span>
          </p>

          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2"
            >
              <FaUserCircle className="text-3xl" />
              <span className="hidden sm:block">Admin</span>
            </button>

            {showMenu && (
              <div className="absolute right-0 top-12 w-44 bg-white rounded-lg shadow-lg border">
                <div className="p-3 border-b">
                  <p className="font-medium text-sm">admin@tnvoyage.com</p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full text-left p-3 text-red-500 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
