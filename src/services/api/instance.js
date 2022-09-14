import axios from 'axios';

export const $api = axios.create({
  withCredentials: true,
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/api_v1`
});

$api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
