import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { bookActions } from './booksReducer/bookActions';
import { booksReducer } from './booksReducer/booksReducer';
import { filterActions } from './filterReduer/filterActions';
import { filterReducer } from './filterReduer/filterReducer';
import { userActions } from './userReducer/userActions';
import { userReducer } from './userReducer/userReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  combineReducers({
    filterReducer,
    booksReducer,
    userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export const allActions = {
  ...bookActions,
  ...filterActions,
  ...userActions,
};

export type RootState = ReturnType<typeof store.getState>;
