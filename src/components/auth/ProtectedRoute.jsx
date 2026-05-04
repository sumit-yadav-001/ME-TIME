import { Navigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { PageLoader } from '../ui/Loader';
import { useEffect, useState } from 'react';

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Check auth status
    const auth = authService.isAuthenticated();
    setIsAuth(auth);
  }, []);

  if (isAuth === null) return <PageLoader />;

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
