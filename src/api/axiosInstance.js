import axios from 'axios';

// 建立 axios 實例，供全域統一管理 API 呼叫
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

/**
 * 將 Redux store 注入 axios，於每次請求攔截時自動帶上 Authorization 標頭。
 * 這樣做可避免在此檔案直接引用 store 造成循環依賴。
 * @param {import('@reduxjs/toolkit').EnhancedStore} store - 應用程式的 Redux store
 */
export const attachStore = (store) => {
  instance.interceptors.request.use(
    (config) => {
      const { token } = store.getState().user;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export default instance;

