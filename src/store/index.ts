import { combineReducers, createStore } from 'redux';
import { bookActions } from './booksReducer/bookActions';
import { booksReducer } from './booksReducer/booksReducer';
import { filterActions } from './filterReduer/filterActions';
import { filterReducer } from './filterReduer/filterReducer';

const rootReducer = combineReducers({
  filterReducer,
  booksReducer,
});

export const allActions = {
  ...bookActions,
  ...filterActions,
};

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;
