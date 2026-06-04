import { useEffect, useState } from 'react';
import api from '../utils/axios';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await api.get('/api/auth/verify');
        setStatus('authenticated');
      } catch (error) {
        setStatus('unauthenticated');
      }
    };

    verifyAuth();
  }, []);

  if (status === 'checking') return null;
  if (status === 'unauthenticated') return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
