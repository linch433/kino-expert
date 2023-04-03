import { useEffect } from 'react';
import { useAuth } from '../store/hooks/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebaseConfig';

const AuthProvider = ({ children }) => {
  const { setAuth, setProfileData } = useAuth();

  const user = localStorage.getItem('user');

  const handleUserData = async (user) => {
    const userData = JSON.parse(user);
    const userDocRef = doc(firestore, 'Users', userData.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    return userDocSnapshot.data();
  };

  useEffect(() => {
    const updateAuthState = async () => {
      if (!user) {
        setAuth(false);
        setProfileData(null);
      } else {
        setAuth(true);
        const userData = await handleUserData(user);
        setProfileData(userData);
      }
    };

    updateAuthState();
  }, [user]);

  return <div>{children}</div>;
};

export default AuthProvider;
