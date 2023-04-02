import React from 'react';
import { BooksList, BookDetails, Login, Registration } from 'components';
import { MainPage, ProfilePage } from 'pages';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { IUser } from 'service/types';

const mainLoader = async (): Promise<IUser | void> => {
  try {
    const token = `Bearer ${localStorage.getItem('token')}`;
    const request = await fetch('http://localhost:5432/auth', {
      headers: {
        Authorization: token ?? '',
      },
    });
    const response = await request.json();
    const { user } = response;

    return user || null;
  } catch (err) {
    localStorage.removeItem('token');
  }
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} loader={mainLoader}>
        <Route index element={<BooksList />} />

        <Route path="/details/:bookId" element={<BookDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
