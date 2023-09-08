import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../hooks/context/useUserContext";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Protected = ({ children }) => {
  const { user } = useUserContext();
  const { isAuth } = user;
  const location = useLocation().pathname;

  return isAuth
    ? (
      children
    ) : (
      <Navigate to={REGISTRATION_ROUTE} state={{ from: location }} replace />
    );
};

export { Protected };