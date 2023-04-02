import { IUser } from 'service/types';

export enum USER_ACTIONS {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
  ASYNC = 'ASYNC',
}

export interface ISetUserAction {
  type: USER_ACTIONS.SET_USER;
  payload: IUser;
}

export interface ILogoutAction {
  type: USER_ACTIONS.LOGOUT;
}

export interface IAsyncLogoutAction {
  type: USER_ACTIONS.ASYNC;
}

export type IUserAction = ISetUserAction | ILogoutAction | IAsyncLogoutAction;
