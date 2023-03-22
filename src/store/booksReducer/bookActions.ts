import { IBook } from 'service/types';
import { BOOKS_ACTIONS } from './types';

export const bookActions = {
  setBooks: (payload: { books: IBook[]; total: number }) => ({
    type: BOOKS_ACTIONS.SET_BOOKS,
    payload,
  }),
  updateBooks: (payload: IBook[]) => ({
    type: BOOKS_ACTIONS.UPDATE_BOOKS,
    payload,
  }),
  resetBooks: () => ({
    type: BOOKS_ACTIONS.RESET_BOOKS,
  }),
};
