// pages/admin/Blogs.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AdminBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("mock_blogs");
    return saved ? JSON.parse(saved) : [];
  });

  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("mock_blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Blogs</h1>

        <button
          onClick={() => navigate("create-blog")}
          className="w-full sm:w-auto bg-secondary text-white px-4 py-2 rounded-lg"
        >
          Add Blog
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Category</th>

                <th className="hidden md:table-cell p-4 text-left">Date</th>

                <th className="hidden lg:table-cell p-4 text-left">
                  Read Time
                </th>

                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr className="border-b" key={blog.id}>
                  <td className="p-4">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-16 h-10 object-cover rounded-lg border border-gray-200"
                      />
                    ) : (
                      <div className="w-16 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                        No Img
                      </div>
                    )}
                  </td>
                  <td className="p-4">{blog.title}</td>
                  <td className="p-4">{blog.categoryId}</td>
                  <td className="hidden md:table-cell p-4">{blog.date}</td>

                  <td className="hidden lg:table-cell p-4">{blog.readTime}</td>

                  <td className="p-4">
                    <button
                      onClick={() => navigate(`edit-blog/${blog.id}`)}
                      className="text-blue-500 mr-3"
                      aria-label="edit-icon"
                    >
                      <MdEdit size={20} />
                    </button>

                    <button
                      className="text-red-500"
                      aria-label="delete-icon"
                      onClick={() => handleDeleteBlog(blog.id)}
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
    </div>
  );
};

export default AdminBlogs;
