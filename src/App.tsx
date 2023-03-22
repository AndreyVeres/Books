import { BooksList, Filter, BookDetails, Logo } from 'components';
import { useFetch } from 'hooks/useFetch';

import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

export const App: FC = (): JSX.Element => {
  const { loadAndSetBooks } = useFetch();

  useEffect(() => {
    loadAndSetBooks();
  }, []);
  return (
    <>
      <header>
        <Logo />
        <Filter />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/:bookId" element={<BookDetails />} />
        </Routes>
      </main>
    </>
  );
};
