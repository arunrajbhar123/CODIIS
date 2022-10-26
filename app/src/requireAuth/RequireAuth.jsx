import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
