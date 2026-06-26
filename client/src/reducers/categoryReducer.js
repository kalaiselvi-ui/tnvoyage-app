export const initialState = {
  categories: [],
  error: null,
  loading: false,
};

export const categoryReducer = (state, action) => {
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
        loading: false,
        categories: action.payload,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: action.payload
          ? [...state.categories, action.payload]
          : state.categories,
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat._id === action.payload._id ? action.payload : cat,
        ),
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (cat) => cat._id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
