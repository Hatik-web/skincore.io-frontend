import { createSlice } from '@reduxjs/toolkit';
import { getProfile, logout } from './auth.action';

const initialState = {
  isLoaded: false,
  isAuth: true,
  user: null,
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [getProfile.fulfilled.type]: (state, action) => {
      state.user = {
        ...action.payload,
        balance: 3000
      };
      state.isLoaded = true;
      state.isAuth = true;
      state.error = null;
    },
    [getProfile.rejected.type]: (state, action) => {
      state.isAuth = false;
      state.isLoaded = true;
      state.error = action.payload;
    },

    [logout.fulfilled.type]: (state) => {
      state.user = null;
      state.isLoaded = true;
      state.error = null;
    },
    [logout.rejected.type]: (state, action) => {
      state.isLoaded = true;
      state.error = action.payload;
    }
  }
});

export const selectAuth = (state) => state.auth;
export const authReducer = authSlice.reducer;
