import { IAuthPayload } from 'containers/Auth/interfaces';
import { User } from 'common/models/user';
import api from 'api/api';

export class AuthService {
  async login(data: IAuthPayload): Promise<User> {
    // Запрос на бэк для авторизации
    /*
    const apiRoute = '/auth/login';
    const response = await api.post(apiRoute, data);

    return response.user;
     */
    // Временная логика для авторизации
    if (data.email === 'root@gmail.com' && data.password === 'rootpassword') {
      return {
        id: 1,
        email: 'root@gmail.com',
      };
    } else {
      throw new Error('Wrong Email or Password');
    }
  }
}

export const authService = new AuthService();
