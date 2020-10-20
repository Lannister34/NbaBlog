/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const BASE_URL = 'test' || 'https://rapidapi.p.rapidapi.com/';

class Api {
  baseUrl: string;
  instance: AxiosInstance;
  constructor() {
    this.baseUrl = BASE_URL;
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '17682167bfmsh059f478d953dfffp1c4342jsn01cc71ff4e94',
        useQueryString: true,
      },
    });
  }

  async get(url: string, params?: any) {
    return await this.instance
      .get(url, {
        params,
      })
      .then(Api.handleResponse)
      .catch(Api.handleError);
  }

  async post(url: string, data: any) {
    return await this.instance.post(url, data).then(Api.handleResponse).catch(Api.handleError);
  }

  async put(url: string, data: any) {
    return await this.instance.put(url, data, {}).then(Api.handleResponse).catch(Api.handleError);
  }

  async delete(url: string, data?: any) {
    return await this.instance
      .delete(url, {
        data,
      })
      .then(Api.handleResponse)
      .catch(Api.handleError);
  }

  private static handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private static handleError(error: AxiosError) {
    if (error.response) {
      throw new Error(error.response.data.error);
    } else if (error.request) {
      throw new Error(error.request.responseText);
    } else {
      throw new Error(error.message);
    }
  }
}

export default new Api();
