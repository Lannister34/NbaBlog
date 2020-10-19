import { User } from 'common/models/user';

export interface IAuthState {
  user: User;
  errorMessage: string;
  isLoading: boolean;
}

export interface IAuthPayload {
  email: string;
  password: string;
}
