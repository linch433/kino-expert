import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import filmsSlice from './slices/filmsSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    films: filmsSlice,
  },
});
