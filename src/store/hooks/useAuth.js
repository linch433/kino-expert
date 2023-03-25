import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const _isAuth = useSelector((state) => state.auth.isAuth);

  const _setAuth = (status) => {
    dispatch(setAuth(status));
  };

  const _profileData = useSelector((state) => {
    return state.auth;
  });

  return { isAuth: _isAuth, setAuth: _setAuth, profileData: _profileData };
};
