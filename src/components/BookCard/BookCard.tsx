import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBook } from 'service/types';

import './bookCard.scss';

export const BookCard: FC<IBook> = (book): JSX.Element => {
  const { imageLinks, categories, title, authors } = book.volumeInfo;

  return (
    <li className="book__item">
      <Link to={`/${book.id}`}>
        <img src={imageLinks?.smallThumbnail} alt="book__label" className="book__img" />
      </Link>
      <p className="book__genre">{categories?.join(' ')}</p>
      <h5 className="book__name">{title.slice(0, 30) + '...'}</h5>
      <p className="book__author">{authors?.join(' ')}</p>
    </li>
  );
};
