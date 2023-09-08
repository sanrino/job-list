import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks/context/useUserContext';
import { HOME_ROUTE } from '../utils/consts';

const UnAuthenticated = ({ children }) => {
  const { user } = useUserContext();
  const { isAuth } = user

  return !isAuth ? children : <Navigate to={HOME_ROUTE} replace />;
}

export { UnAuthenticated };