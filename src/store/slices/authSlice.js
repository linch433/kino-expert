import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  profileData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setProfileData(state, action) {
      state.profileData = action.payload;
    }
  },
});

export const { setAuth, setProfileData } = authSlice.actions;
export default authSlice.reducer;