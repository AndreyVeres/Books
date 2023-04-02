import { Dispatch } from 'react';
import { basicURL, maxResults } from 'service/consts';
import { RootState } from 'store';
import { BOOKS_ACTIONS, IBooksActions } from './types';

export const bookActions = {
  resetBooks: () => ({
    type: BOOKS_ACTIONS.RESET_BOOKS,
  }),

  loadBooks: () => {
    return async (dispatch: Dispatch<IBooksActions>, getState: () => RootState) => {
      try {
        const { searchQuery, sortType, categories, startIndex } = getState().filterReducer;
        const URL = `${basicURL}${searchQuery}+subject:${categories}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortType}&${process.env.API_KEY}`;
        const { items, totalItems } = await fetch(URL).then((res) => res.json());

        dispatch({
          type: BOOKS_ACTIONS.SET_BOOKS,
          payload: { books: items, total: totalItems },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },

  getBookById: (id: string) => {
    return (dispatch: Dispatch<IBooksActions>) => {
      console.log('gebookbyid');
    };
  },
};
