import { AUTH_LOGIN_REQUEST, AuthActionTypes } from 'containers/Auth/actionTypes';

export const loginRequest = (email: string, password: string, keepSignedIn: boolean): AuthActionTypes => ({
  type: AUTH_LOGIN_REQUEST,
  payload: {
    email,
    password,
    keepSignedIn,
  },
});
