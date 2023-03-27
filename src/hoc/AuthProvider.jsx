import { useEffect } from 'react';
import { useAuth } from '../store/hooks/useAuth';

const AuthProvider = ({ children }) => {
  const user = localStorage.getItem('user');

  const { setAuth } = useAuth();

  useEffect(() => {
    if (!user) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [user]);

  return <div>{children}</div>;
};

export default AuthProvider;
