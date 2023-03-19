import { IBook } from 'service/types';
import { BOOKS_ACTIONS } from './types';

export const setBooksAction = (payload: { books: IBook[]; total: number }) => ({
  type: BOOKS_ACTIONS.SET_BOOKS,
  payload,
});

export const updateBooksAction = (payload: IBook[]) => ({
  type: BOOKS_ACTIONS.UPDATE_BOOKS,
  payload,
});
