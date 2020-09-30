import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { notification } from 'components/Notification';
import { apiConfig } from './api-config';
import { getToken } from './auth';

const api = axios.create(apiConfig);

api.interceptors.request.use((param: AxiosRequestConfig) => ({
  baseUrl: apiConfig.baseURL,
  ...param,
}));

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      if (response.data.message) {
        notification({
          type: 'success',
          title: 'Apontamento',
          message: response.data.message,
        });
      }
    } else {
      const error = new Error(response.statusText);
      throw error;
    }
    return response.data;
  },
  (error: any) => {
    // handle the response error
    if (error.response !== undefined) {
      if (error.response.status === 400) {
        if (error.response.data.errors.length) {
          error.response.data.errors.forEach((nome: string) => {
            notification({ type: 'info', title: 'Apontamento', message: nome });
          });
        }
      }
      return Promise.reject(error);
    }
    notification({
      type: 'danger',
      title: 'Apontamento',
      message: 'Contate o administrador do sistema',
    });
    // debugger;
    return Promise.reject(error);
  },
);

export { api };
