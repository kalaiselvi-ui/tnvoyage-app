export const initialState = {
  blogs: [],
  loading: false,
  error: null,
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: true,
        error: null,
        blogs: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case "EDIT_BLOG":
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog,
        ),
      };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
  }
};
