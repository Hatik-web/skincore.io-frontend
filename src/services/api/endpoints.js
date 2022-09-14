import { $api } from './instance';

const apiRoutes = {
  login: `${process.env.REACT_APP_BASE_API_URL}/api_v1/auth/login`,
  isAuth: '/auth/is_authenticated',
  refresh: '/auth/refresh',
  logout: '/',
  user: '/',
  box: '/box-category'
};

const endpoints = {
  login: () => (window.location.href = apiRoutes.login),
  refresh: () => $api.get(apiRoutes.refresh),
  getProfile: () => $api.get(apiRoutes.isAuth),
  logout: () => $api.delete(apiRoutes.logout),
  getUser: (id) =>
    $api.request({
      url: apiRoutes.user,
      method: 'GET',
      params: { id }
    }),
  getBoxes: () =>
    $api.request({
      url: apiRoutes.box,
      method: 'GET'
    })
};

export default endpoints;
