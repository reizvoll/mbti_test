import { Navigate, Outlet } from "react-router-dom";
import authStore from "../store/authStore";

const ProtectedRoute = () => {
  const isAuthenticated = authStore()

  return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
}

export default ProtectedRoute
