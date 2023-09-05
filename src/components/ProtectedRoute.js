import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  if (localStorage.getItem("authenticated") === "true") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
