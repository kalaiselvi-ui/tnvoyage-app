import React, { useEffect } from "react";
import BlogForm from "../../../components/BlogForm";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../../../context/BlogContext.jsx";
import { toast } from "react-toastify";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs, editBlog, getBlogs } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  const currentBlog = blogs.find((blog) => String(blog._id) === String(id));
  if (!currentBlog) return;
  const handleSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("catName", data.catName);
      formdata.append("readTime", data.readTime);
      formdata.append("shortDesc", data.shortDesc);
      formdata.append("places", data.places);
      formdata.append("travelInfo", JSON.stringify(data.travelInfo));

      if (data.image instanceof File) {
        formdata.append("image", data.image);
      }

      const updatedBlog = await editBlog(id, formdata);
      if (updatedBlog) {
        toast.success("Blog edited Successfully");
        navigate("/admin-dashboard/blogs");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to edit blog");
      console.log(err);
    }
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
