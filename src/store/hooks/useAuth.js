import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const _setAuth = (status) => {
    dispatch(setAuth(status));
  }

  const _authData = useSelector((state) => {
    return state.auth;
  })

  return { setAuth: _setAuth, authData: _authData }
}