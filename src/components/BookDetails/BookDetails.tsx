import React, { FC, useEffect, useState } from 'react';
import { ErrorMessage, MyButton, Spinner } from 'components';
import { useParams } from 'react-router-dom';
import { getBook } from 'service/googleBooks';
import { IBook, IGoogleBooksResponse } from 'service/types';

import './bookDetails.scss';

import { useAppSelector } from 'hooks/useAppSelector';

export const BookDetails: FC = (): JSX.Element => {
  const { bookId } = useParams();
  const [book, setBook] = useState<IBook>({} as IBook);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const isAuth = useAppSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    getBook(bookId as string)
      .then(({ items }: IGoogleBooksResponse) => {
        if (!items) {
          setError(true);
        } else {
          setBook(() => items[0]);
        }
      })
      .then(() => setIsLoading(false));
  }, [bookId]);

  return (
    <>
      {error ? (
        <ErrorMessage>Something went wrong...</ErrorMessage>
      ) : (
        <div className="book">
          {!isLoading ? (
            <>
              <img
                src={book?.volumeInfo.imageLinks?.smallThumbnail}
                alt="book-image"
                className="book__img"
              />
              <div className="book__info">
                <p className="book__genres">{book.volumeInfo.categories?.join(' ')}</p>
                <h2 className="book__title">{book.volumeInfo.title}</h2>
                <h4 className="book__author">{book.volumeInfo.authors}</h4>
                <p className="book__descriptions">{book.volumeInfo.description}</p>
              </div>
              {isAuth ? <MyButton>Добавить в избранное</MyButton> : null}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </>
  );
};
