import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [status, setStatus] = useState('checking');

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get('http://localhost:8000/api/auth/verify', {
          withCredentials: true,
        });
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
