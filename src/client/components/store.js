import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../state/userSlice';

const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
