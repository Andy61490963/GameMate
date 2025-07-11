import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { attachStore } from '../api/axiosInstance';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// 建立 store 後注入 axios，讓 API 呼叫可存取最新 token
attachStore(store);

export default store;
