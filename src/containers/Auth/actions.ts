import {
  AUTH_LOADING_STATUS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AuthActionTypes,
} from 'containers/Auth/actionTypes';
import { User } from 'common/models/user';

export const loginRequest = (email: string, password: string): AuthActionTypes => ({
  type: AUTH_LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginFailure = (errorMessage: string): AuthActionTypes => ({
  type: AUTH_LOGIN_FAILURE,
  payload: {
    errorMessage,
  },
});

export const loginSuccess = (user: User): AuthActionTypes => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export const loadingStatus = (isLoading: boolean): AuthActionTypes => ({
  type: AUTH_LOADING_STATUS,
  payload: {
    isLoading,
  },
});
