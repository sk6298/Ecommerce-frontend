/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default RequireAuth;
