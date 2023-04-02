import React, { FC, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { router } from 'router/router';
import { useActions } from 'hooks/useActions';

export const App: FC = (): JSX.Element => {
  const { checkAuth } = useActions();

  useEffect(() => {
    checkAuth();
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
