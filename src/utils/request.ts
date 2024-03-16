import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export enum REQUEST_TIMEOUT {
  default = 20000,
  upload = 60000,
  large = 200000,
}

// Request default
const request = axios.create({
  baseURL: import.meta.url,
  timeout: REQUEST_TIMEOUT.default,
});

const interceptorRequest = async (config: AxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json';

  const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzkzZmM3MDY5ZWEyZGM3MDUxYmQ2MDQxZjAyNTg2MyIsInN1YiI6IjY1ZjI5N2YxMDZmOTg0MDE0ODQzMTAyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4l4ZrOc-BoKpqDSO9WWANGCxyCwWzaR_EQ-9WJdEbUk';

  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }

  return config;
};

const interceptorResponse = (response: AxiosResponse) => {
  if (response && response?.data) {
    return response.data;
  }

  return response;
};

const interceptorError = (error: AxiosError) => {
  return Promise.reject(error.response?.data);
};

request.interceptors.request.use(interceptorRequest, interceptorError);
request.interceptors.response.use(interceptorResponse, interceptorError);

export default request;
