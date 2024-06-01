// Private routes designated to certain user roles only (like admin)

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.userType;

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/home" />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
