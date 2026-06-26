import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "../reducers/authReducer.js";
import API from "../api/axiosInstance.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  //register
  const registerUser = async (formData) => {
    try {
      const response = await API.post("/api/user/register", formData);

      dispatch({
        type: "REGISTER",
        payload: response.data.user,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      dispatch({
        type: "AUTH_ERROR",
        payload: err.message,
      });
    }
  };
  //login
  const loginUser = async (formData) => {
    try {
      const response = await API.post("/api/user/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({
        type: "LOGIN",
        payload: {
          user: response.data.user,
          token: response.data.token,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      dispatch({
        type: "AUTH_ERROR",
        payload: err.message,
      });
    }
  };
  //logout
  const logoutUser = async () => {
    try {
      const response = await API.post("/api/user/logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch({
        type: "LOGOUT",
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "AUTH_ERROR",
        payload: err.message,
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
