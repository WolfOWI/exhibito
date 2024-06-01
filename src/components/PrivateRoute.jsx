// Private routes designated to certain user roles only (like admin)

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ allowedRoles }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.userType;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
