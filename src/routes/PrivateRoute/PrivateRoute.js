import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  
  console.log(user)
  if (!user) {
    console.log(user);
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
  }
  console.log(user);
  return children;
};

export default PrivateRoute;
