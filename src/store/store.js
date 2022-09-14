import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.slice';

const rootReducer = combineReducers({
  auth: authReducer
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
  });

export const store = setupStore();
