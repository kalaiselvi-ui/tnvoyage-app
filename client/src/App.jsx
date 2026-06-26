import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogDetails = lazy(() => import("./pages/BlogDetails.jsx"));
const Destinations = lazy(() => import("./pages/Destinations.jsx"));
const DestinationDetails = lazy(() => import("./pages/DestinationDetails.jsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:slug" element={<BlogDetails />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route
              path="/destinations/:slug"
              element={<DestinationDetails />}
            />
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
            <Route
              path="categories/create-category"
              element={<CreateCategory />}
            />
            <Route
              path="categories/edit-category/:id"
              element={<EditCategory />}
            />

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
      </Suspense>

      <ToastContainer position="top-right" autoClose={2000} newestOnTop />
    </>
  );
};

export default App;
