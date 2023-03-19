import React from 'react';

import { useStore } from 'hooks/useStore';
import { getBooks } from 'service/googleBooks';

export default function Filter(): JSX.Element {
  const { searchQuery, sortType, categories, setQuery, setType, setBooks, setCategory } =
    useStore();

  const searchHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();

    getBooks(searchQuery, sortType, categories).then(({ items, totalItems }) => {
      setBooks({
        books: items,
        total: totalItems,
      });
    });
  };

  return (
    <>
      <form className="search__form" role="search">
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onInput={(e) => setQuery(e.currentTarget.value)}
        />
        <select
          defaultValue={''}
          className="categories"
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value="">all</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="History">History</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>

        <select
          defaultValue={'newest'}
          className="sortingBy"
          onChange={(e) => setType(e.currentTarget.value)}
        >
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>

        <button onClick={(e) => searchHandler(e)}>find books</button>
      </form>
    </>
  );
}
