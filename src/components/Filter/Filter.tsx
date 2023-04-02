import React, { FC } from 'react';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { MyButton } from 'components';
import { useNavigate } from 'react-router-dom';

import './filter.scss';

export const Filter: FC = (): JSX.Element => {
  const { searchQuery } = useAppSelector((state) => state.filterReducer);
  const { setQuery, setSortType, setCategory, loadBooks, resetBooks } = useActions();
  const navigate = useNavigate();

  const searchHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
    resetBooks();
    loadBooks();
  };

  return (
    <>
      <form className="search" role="search">
        <input
          type="search"
          placeholder="Изучить Bookhub..."
          className="search__input"
          value={searchQuery}
          onInput={(e) => setQuery(e.currentTarget.value)}
        />

        <div className="search__item">
          <label htmlFor="categories">Category:</label>
          <select
            id="categories"
            defaultValue={''}
            className="categories"
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            <option value="">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="History">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
        </div>
        <div className="search__item">
          <label htmlFor="sortType">Sort:</label>
          <select
            defaultValue={'newest'}
            className="sortingBy"
            id="sortType"
            onChange={(e) => setSortType(e.currentTarget.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <MyButton onClick={searchHandler}>find books</MyButton>
      </form>
    </>
  );
};
