import React from "react";
import BlogForm from "../../../components/BlogForm";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("mock_blogs") || "[]");

  const currentBlog = blogs.find((blog) => String(blog.id) === String(id));
  if (!currentBlog) return;
  const handleSubmit = (data) => {
    const updatedBlogs = blogs.map((blog) =>
      // String(blog.id) === id
      //   ? {
      //       ...blog,
      //       ...data,
      //       image: data.image ? URL.createObjectURL(data.image) : blog.image,
      //     }
      //   : blog,
      {
        if (blog.id === currentBlog.id) {
          return {
            ...blog,
            ...data,
            image:
              data.image instanceof File
                ? URL.createObjectURL(data.image)
                : blog.image,
          };
        }
        return blog;
      },
    );

    localStorage.setItem("mock_blogs", JSON.stringify(updatedBlogs));
    // 4. Redirect
    navigate("/admin-dashboard/blogs");
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Edit Blog</h2>
      <BlogForm
        onSubmit={handleSubmit}
        isEdit={true}
        initialData={currentBlog}
      />
    </div>
  );
};

export default EditBlog;
