import React, { FC } from 'react';
import { BookCard, Spinner, MyButton } from 'components';
import { useAppSelector } from 'hooks/useAppSelector';

import './bookList.scss';
import { useActions } from 'hooks/useActions';

export const BooksList: FC = (): JSX.Element => {
  const { total, books } = useAppSelector((state) => state.booksReducer);
  const { loadBooks, setStartIndex } = useActions();

  const loadBooksHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setStartIndex();
    loadBooks();
  };

  return (
    <>
      <h3 className="total__items">Found: {total} books</h3>
      <ul className="books" style={{ marginBottom: 30 }}>
        {total ? (
          books?.map((book) => <BookCard {...book} key={book.id + book.etag} />)
        ) : (
          <Spinner />
        )}
      </ul>

      <MyButton onClick={loadBooksHandler}>load more books</MyButton>
    </>
  );
};
