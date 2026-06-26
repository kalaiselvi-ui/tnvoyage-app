import BlogForm from "../../../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../../../context/BlogContext.jsx";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const navigate = useNavigate();
  const { addBlog } = useBlog();

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

      if (data.image) {
        formdata.append("image", data.image);
      }
      const createdBlog = await addBlog(formdata);
      if (createdBlog) {
        toast.success("New Blog Created Successfully");
        navigate("/admin-dashboard/blogs");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create blog");
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Blog</h2>
      <BlogForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateBlog;
