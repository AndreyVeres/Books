import { maxResults } from 'service/consts';
import { IBook } from 'service/types';
import { IBooksActions, BOOKS_ACTIONS } from './types';

export interface IBooksState {
  books: IBook[];
  total: number;
  startIndex: number;
}

export const bookInitialState: IBooksState = {
  books: [],
  total: 0,
  startIndex: 0,
};

export const booksReducer = (state = bookInitialState, action: IBooksActions): IBooksState => {
  switch (action.type) {
    case BOOKS_ACTIONS.SET_BOOKS: {
      return { ...action.payload, startIndex: 0 };
    }
    case BOOKS_ACTIONS.UPDATE_BOOKS: {
      return {
        ...state,
        books: [...state.books, ...action.payload],
        startIndex: state.startIndex + maxResults + 1,
      };
    }
    case BOOKS_ACTIONS.RESET_BOOKS: {
      return bookInitialState;
    }
    default:
      return state;
  }
};
