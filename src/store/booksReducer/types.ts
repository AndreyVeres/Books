import { IBook } from 'service/types';

export enum BOOKS_ACTIONS {
  SET_BOOKS = 'SET_BOOKS',
  UPDATE_BOOKS = 'UPDATE_BOOKS',
  RESET_BOOKS = 'RESET_BOOKS',
}

interface ISetBookAction {
  type: BOOKS_ACTIONS.SET_BOOKS;
  payload: {
    books: IBook[];
    total: number;
  };
}

interface IUpdateBookActin {
  type: BOOKS_ACTIONS.UPDATE_BOOKS;
  payload: IBook[];
}

interface IResetBookAction {
  type: BOOKS_ACTIONS.RESET_BOOKS;
  payload: IBook[];
}

export type IBooksActions = ISetBookAction | IUpdateBookActin | IResetBookAction;
