import React, { FC } from 'react';
import { BookCard, Spinner } from 'components';
import { useAppSelector } from 'hooks/useAppSelector';
import { useFetch } from 'hooks/useFetch';

import './bookList.scss';
import { MyButton } from 'components/UI/Button/MyButton';

export const BooksList: FC = (): JSX.Element => {
  const { total, books } = useAppSelector((state) => state.booksReducer);
  const { loadAndUpdateBooks } = useFetch();
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

      <MyButton
        onClick={(e) => {
          e.preventDefault();
          loadAndUpdateBooks();
        }}
      >
        load more
      </MyButton>
    </>
  );
};
