import { IBook } from 'service/types';

export enum BOOKS_ACTIONS {
  SET_BOOKS = 'SET_BOOKS',
  RESET_BOOKS = 'RESET_BOOKS',
}

interface ISetBookAction {
  type: BOOKS_ACTIONS.SET_BOOKS;
  payload: {
    books: IBook[];
    total: number;
  };
}

interface IResetBookAction {
  type: BOOKS_ACTIONS.RESET_BOOKS;
}

export type IBooksActions = ISetBookAction | IResetBookAction;
