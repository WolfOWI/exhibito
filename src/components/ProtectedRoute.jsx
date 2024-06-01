// Protected Route - ensuring user is logged in before accessing pages

import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={Component} />;
};

export default ProtectedRoute;
