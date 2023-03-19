import React from 'react';
import { Link } from 'react-router-dom';
import { IBook } from 'service/types';

import './book.scss';

export default function Book(book: IBook): JSX.Element {
  const { imageLinks, categories, title, authors } = book.volumeInfo;

  return (
    <li className="book__item">
      <img src={imageLinks?.smallThumbnail} alt="book__label" className="book__img" />

      <p className="book__genre">{categories?.join(' ')}</p>
      <Link to={`/${book.id}`}>
        <h5 className="book__name">{title.slice(0, 30) + '...'}</h5>
      </Link>
      <p className="book__author">{authors?.join(' ')}</p>
    </li>
  );
}
