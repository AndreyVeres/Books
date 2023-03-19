import React, { useState } from 'react';
import Book from '../Book/Book';
import { useStore } from 'hooks/useStore';

import './bookList.scss';
import { getBooks } from 'service/googleBooks';

export default function BooksList(): JSX.Element {
  const { books, total } = useStore();

  const { searchQuery, sortType, categories, updateBooks } = useStore();
  const [startIndex, setStartIndex] = useState(30);

  const searchHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    getBooks(searchQuery, sortType, categories, startIndex).then(({ items }) => {
      updateBooks(items);
      setStartIndex((prev) => (prev += 30));
    });
  };

  return (
    <>
      <h3 className="total__items">{total}</h3>
      <ul className="books" style={{ marginBottom: 30 }}>
        {total > 0 ? (
          books?.map((book) => <Book {...book} key={book.id + book.etag} />)
        ) : (
          <div>loading...</div>
        )}
      </ul>
      <button onClick={(e) => searchHandler(e)}>load more</button>
    </>
  );
}
