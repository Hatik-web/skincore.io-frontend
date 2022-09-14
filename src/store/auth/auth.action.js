import { createAsyncThunk } from '@reduxjs/toolkit';
import endpoints from '../../services/api/endpoints';
import { getErrorMessage } from '../utils';

export const login = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await endpoints.login();
  } catch (err) {
    const message = getErrorMessage(err);
    return rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await endpoints.logout();
  } catch (err) {
    const message = getErrorMessage(err);
    return rejectWithValue(message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
  try {
    const response = await endpoints.refresh();
    return response.data.data;
  } catch (err) {
    const message = getErrorMessage(err);
    return rejectWithValue(message);
  }
});

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await endpoints.getProfile();
      const response = data.data;
      if (response.success) {
        return response.user;
      }
      return null;
    } catch (err) {
      const error = err;
      dispatch(refresh());
      const message = getErrorMessage(error);
      return rejectWithValue(message);
    }
  }
);
