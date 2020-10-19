import { IAuthState } from './interfaces';
import { AUTH_LOADING_STATUS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AuthActionTypes } from './actionTypes';

const initialState: IAuthState = {
  user: {},
  errorMessage: '',
  isLoading: false,
};

export function AuthReducer(state: IAuthState = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    case AUTH_LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case AUTH_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
