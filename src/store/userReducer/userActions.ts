import { Dispatch } from 'redux';
import { IUser } from 'service/types';
import { ILogoutAction, IUserAction, USER_ACTIONS } from './types';

export const userActions = {
  logaut: (): ILogoutAction => {
    localStorage.removeItem('token');

    return {
      type: USER_ACTIONS.LOGOUT,
    };
  },

  setUser: (user: IUser) => ({ type: USER_ACTIONS.SET_USER, payload: user }),

  checkAuth: () => {
    return async (dispatch: Dispatch<IUserAction>) => {
      try {
        const token = `Bearer ${localStorage.getItem('token')}`;
        const response = await fetch('http://localhost:5432/auth', {
          headers: {
            Authorization: token ?? '',
          },
        });
        const { user } = await response.json();
        if (user) {
          dispatch({ type: USER_ACTIONS.SET_USER, payload: user });
        }
      } catch (err) {
        console.log(err);
      }
    };
  },

  login: (username: string, password: string) => {
    return async (dispatch: Dispatch<IUserAction>) => {
      try {
        const request = await fetch('http://localhost:5432/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const { token, user } = await request.json();

        if (token && user) {
          dispatch({ type: USER_ACTIONS.SET_USER, payload: user });
        }
        localStorage.setItem('token', token);
      } catch (err) {
        console.log(err);
      }
    };
  },
};
