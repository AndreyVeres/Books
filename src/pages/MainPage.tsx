import BooksList from 'components/BooksList/BooksList';
import Filter from 'components/Filter/Filter';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <>
      <header>
        <h1 className="title">BOOKHUB</h1>
        <Filter />
      </header>
      <main>
        <BooksList />
      </main>
    </>
  );
}
