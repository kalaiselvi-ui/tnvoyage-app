import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
