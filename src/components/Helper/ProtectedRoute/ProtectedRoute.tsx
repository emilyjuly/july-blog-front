import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) {
    return children;
  } else if (!isLogged) {
    return <Navigate to="/login" />;
  } else {
    <></>;
  }
};

export default ProtectedRoute;
