import React from 'react';
import { NavBar } from 'components';
import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate, Outlet } from 'react-router-dom';

import './loginPage.scss';

export const LoginPage = (): JSX.Element => {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return (
    <>
      {isAuth ? (
        <Navigate to={'/'} replace />
      ) : (
        <>
          <NavBar />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};
