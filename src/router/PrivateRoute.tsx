import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = (): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return <>{isAuth ? <Outlet /> : <Navigate to="/" replace />}</>;
};
