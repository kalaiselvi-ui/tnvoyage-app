export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        user: action.payload.user,
        token: null,
        isAuthenticated: false,
        error: null,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        error: null,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
