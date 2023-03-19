import { useDispatch, useSelector } from 'react-redux';
import { IBook } from 'service/types';
import { IRootReducer } from 'store';
import { setBooksAction, updateBooksAction } from 'store/booksReducer/bookActions';
import {
  setQueryAction,
  setCategoryAction,
  setSortTypeAction,
} from '../store/filterReduer/filterActions';

export const useStore = () => {
  const filterState = useSelector((state: IRootReducer) => state.filterReducer);
  const booksState = useSelector((state: IRootReducer) => state.booksReducer);
  const dispatch = useDispatch();

  const setQuery = (query: string) => {
    dispatch(setQueryAction(query));
  };

  const setType = (type: string) => {
    dispatch(setSortTypeAction(type));
  };

  const setCategory = (catygory: string) => {
    dispatch(setCategoryAction(catygory));
  };

  const setBooks = (_books: { books: IBook[]; total: number }) => {
    dispatch(setBooksAction(_books));
  };

  const updateBooks = (books: IBook[]) => {
    dispatch(updateBooksAction(books));
  };

  return {
    ...filterState,
    ...booksState,
    setQuery,
    setType,
    setCategory,
    setBooks,
    updateBooks,
  };
};
