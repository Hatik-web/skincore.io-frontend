import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const auth = false;
  const location = useLocation();
  const url = new URLSearchParams();
  url.set('redirect', location.pathname + location.search);

  return auth ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/',
        search: url.toString()
      }}
    />
  );
}

export default PrivateRoute;
