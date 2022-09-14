import { Navigate, useLocation } from 'react-router-dom';

function GuestRoute({ children }) {
  const auth = false;
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));

  return auth ? <Navigate to={url.get('redirect') || '/'} /> : children;
}

export default GuestRoute;
