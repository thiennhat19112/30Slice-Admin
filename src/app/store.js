import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/auth';
import messageReducer from './slices/message';

export const store = configureStore({
  reducer: {
    auth: userReducer,
    message: messageReducer,
  },
});
