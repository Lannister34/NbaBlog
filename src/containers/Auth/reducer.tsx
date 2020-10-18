import { IAuthState } from './interfaces';
import { AuthActionTypes } from './actionTypes';

const initialState: IAuthState = {
  user: null,
  email: '',
  password: '',
  confirmPassword: '',
  errorMessage: '',
  successMessage: '',
  isRegistration: false,
  keepSignedIn: false,
  isLoading: false,
};

export function AuthReducer(state: IAuthState = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    default:
      return state;
  }
}
