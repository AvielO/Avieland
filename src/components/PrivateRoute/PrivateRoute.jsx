import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return !!localStorage.getItem("username");
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/signin" />;
};
export default PrivateRoute;
