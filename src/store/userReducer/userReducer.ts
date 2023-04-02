import { IUser } from 'service/types';
import { IUserAction, USER_ACTIONS } from './types';

export interface IUserState {
  isAuth: boolean;
  currentUser: IUser;
}

export const userInitialState: IUserState = {
  isAuth: false,
  currentUser: {
    name: '',
    favoritBooks: [],
  },
};

export const userReducer = (state = userInitialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      return { currentUser: action.payload, isAuth: true };
    case USER_ACTIONS.LOGOUT:
      return userInitialState;
    default:
      return state;
  }
};
