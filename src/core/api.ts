import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const api = (config: AxiosRequestConfig) => {
  const fetchApi = axios.create(config);
  function get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return fetchApi.get(url, config);
  }

  return { get };
};
