import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoutes;
