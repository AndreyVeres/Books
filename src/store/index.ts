import { combineReducers, createStore } from 'redux';
import { booksReducer, IBooksState } from './booksReducer/booksReducer';
import { filterReducer, IFilterState } from './filterReduer/filterReducer';

export interface IRootReducer {
  filterReducer: IFilterState;
  booksReducer: IBooksState;
}

const rootReducer = combineReducers({
  filterReducer,
  booksReducer,
});

export const store = createStore(rootReducer);
