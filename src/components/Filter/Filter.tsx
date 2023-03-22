import React, { FC } from 'react';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useFetch } from 'hooks/useFetch';

import './filter.scss';

import { MyButton } from 'components/UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';

export const Filter: FC = (): JSX.Element => {
  const { searchQuery } = useAppSelector((state) => state.filterReducer);
  const { setQuery, setSortType, setCategory } = useActions();
  const { loadAndSetBooks } = useFetch();
  const navigate = useNavigate();
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
        <MyButton
          onClick={(e) => {
            navigate('/');
            e.preventDefault();
            loadAndSetBooks();
          }}
        >
          find books
        </MyButton>
      </form>
    </>
  );
};
