export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';

export interface loginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    keepSignedIn: boolean;
  };
}

export type AuthActionTypes = loginRequestAction;
