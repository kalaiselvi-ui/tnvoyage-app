import { createContext, useContext, useReducer } from "react";
import { blogReducer, initialState } from "../reducers/blogReducer.js";
import API from "../api/axiosInstance.js";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  //get blog
  const getBlogs = async () => {
    try {
      dispatch({
        type: "FETCH_START",
      });
      const res = await API.get("/blog");
      dispatch({
        type: "FETCH_SUCCESS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };
  //add blog
  const addBlog = async (formData) => {
    try {
      const res = await API.post("/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "ADD_BLOG",
        payload: res.data.data,
      });
      return res.data.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  //edit blog
  const editBlog = async (id, formData) => {
    try {
      const res = await API.put(`/blog/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "EDIT_BLOG",
        payload: res.data.data,
      });
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  //delete blog
  const deleteBlog = async (id) => {
    try {
      const res = await API.delete(`/blog/delete/${id}`);
      dispatch({
        type: "DELETE_BLOG",
        payload: id,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <BlogContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        blogs: state.blogs,
        getBlogs,
        addBlog,
        deleteBlog,
        editBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
