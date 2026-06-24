import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminBlogs from "./pages/Admin/Blog/AdminBlogs";
import AdminCategory from "./pages/Admin/Category/AdminCategory";
import AdminDestination from "./pages/Admin/Destination/AdminDestination";
import AdminLayout from "./pages/Admin/AdminLayout";
import CreateBlog from "./pages/Admin/Blog/CreateBlog";
import CreateCategory from "./pages/Admin/Category/CreateCategory";
import EditBlog from "./pages/Admin/Blog/EditBlog";
import EditDestination from "./pages/Admin/Destination/EditDestination";
import CreateDestination from "./pages/Admin/Destination/CreateDestination";
import EditCategory from "./pages/Admin/Category/EditCategory";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* Admin Routes */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoutes>
            <AdminLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="blogs" element={<AdminBlogs />} />
        <Route path="blogs/create-blog" element={<CreateBlog />} />
        <Route path="blogs/edit-blog/:id" element={<EditBlog />} />
        <Route path="categories" element={<AdminCategory />} />
        <Route path="categories/create-category" element={<CreateCategory />} />
        <Route path="categories/edit-category/:id" element={<EditCategory />} />

        <Route path="destinations" element={<AdminDestination />} />
        <Route
          path="destinations/create-destination"
          element={<CreateDestination />}
        />
        <Route
          path="destinations/edit-destination/:id"
          element={<EditDestination />}
        />
      </Route>
    </Routes>
  );
};

export default App;
