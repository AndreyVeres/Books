import React, { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Filter, NavBar } from 'components';
import { useActions } from 'hooks/useActions';
import { IUser } from 'service/types';

export const MainPage = () => {
  const { loadBooks } = useActions();
  useLoaderData();
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <NavBar />
      <Filter />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
