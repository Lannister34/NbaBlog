import { User } from 'common/models/user';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOADING_STATUS = 'AUTH_LOADING_STATUS';

export interface loginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface loginFailureAction {
  type: typeof AUTH_LOGIN_FAILURE;
  payload: {
    errorMessage: string;
  };
}

export interface loginSuccessAction {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: {
    user: User;
  };
}

export interface loadingStatusAction {
  type: typeof AUTH_LOADING_STATUS;
  payload: {
    isLoading: boolean;
  };
}

export type AuthActionTypes = loginRequestAction | loginFailureAction | loginSuccessAction | loadingStatusAction;
