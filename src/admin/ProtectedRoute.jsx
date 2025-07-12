// /src/admin/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    // Not logged in, redirect to login page
    return <Navigate to="/admin/login" />;
  }

  // Logged in, show protected content
  return children;
};

export default ProtectedRoute;
