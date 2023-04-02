import { IBook } from 'service/types';
import { IBooksActions, BOOKS_ACTIONS } from './types';

export interface IBooksState {
  books: IBook[];
  total: number;
}

export const bookInitialState: IBooksState = {
  books: [],
  total: 0,
};

export const booksReducer = (state = bookInitialState, action: IBooksActions): IBooksState => {
  switch (action.type) {
    case BOOKS_ACTIONS.SET_BOOKS: {
      console.log('set__boks');
      return {
        ...state,
        total: action.payload.total,
        books: [...state.books, ...action.payload.books],
      };
    }
    case BOOKS_ACTIONS.RESET_BOOKS: {
      console.log('reset__boks');
      return bookInitialState;
    }
    default:
      return state;
  }
};
