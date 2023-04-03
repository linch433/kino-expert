import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setProfileData } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const _isAuth = useSelector((state) => state.auth.isAuth);

  const _setAuth = (status) => {
    dispatch(setAuth(status));
  };

  const _profileData = useSelector((state) => state.auth.profileData);

  const _setProfileData = (status) => {
    dispatch(setProfileData(status));
  };

  return {
    isAuth: _isAuth,
    setAuth: _setAuth,
    profileData: _profileData,
    setProfileData: _setProfileData,
  };
};
