import BlogForm from "../../../components/BlogForm";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    // 1. Grab existing blogs
    const existingBlogs = JSON.parse(
      localStorage.getItem("mock_blogs") || "[]",
    );

    // 2. Format new blog item (converting file object metadata slightly for mock storage)
    const newBlog = {
      id: Date.now(),
      title: data.title,
      description: data.description,
      categoryId: data.categoryId,
      readTime: data.readTime,
      slug: data.slug,
      date: new Date().toLocaleDateString(),
      image: data.image ? URL.createObjectURL(data.image) : null,
    };

    // 3. Save back to localStorage
    localStorage.setItem(
      "mock_blogs",
      JSON.stringify([...existingBlogs, newBlog]),
    );

    // 4. Redirect
    navigate("/admin-dashboard/blogs");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Create Blog</h2>
      <BlogForm onSubmit={handleSubmit} isEdit={false} />
    </div>
  );
};

export default CreateBlog;
