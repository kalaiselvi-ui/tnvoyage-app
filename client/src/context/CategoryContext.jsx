import { createContext, useReducer, useContext } from "react";
import { categoryReducer, initialState } from "../reducers/categoryReducer.js";
import API from "../api/axiosInstance.js";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  //Get categories
  const getCategories = async () => {
    try {
      dispatch({
        type: "FETCH_START",
      });

      // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      const res = await API.get("/api/category");
      dispatch({
        type: "FETCH_SUCCESS",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };
  //CREATE category
  const addCategory = async (formData) => {
    try {
      const res = await API.post("/api/category/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "ADD_CATEGORY",
        payload: res.data.data,
      });
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  //UPDATE category
  const editCategory = async (id, formData) => {
    try {
      const res = await API.put(`/api/category/edit/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: "UPDATE_CATEGORY",
        payload: res.data.category,
      });
      return res.data.category;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  //DELETE Category
  const deleteCategory = async (id) => {
    try {
      const res = await API.delete(`/api/category/delete/${id}`);
      dispatch({
        type: "DELETE_CATEGORY",
        payload: id,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        loading: state.loading,
        error: state.error,
        getCategories,
        addCategory,
        editCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
