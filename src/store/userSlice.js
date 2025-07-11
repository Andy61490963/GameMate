import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../api/authApi';

// 初始狀態從 localStorage 取得，保持登入狀態
const initialState = {
  token: localStorage.getItem('token') || null,
  username: localStorage.getItem('username') || null,
  role: localStorage.getItem('role') || null,
};

// 非同步登入 action
export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await loginApi(username, password);
      return {
        token: data.token,
        username: data.email_,
        role: data.role_,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'Login failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.role = action.payload.role;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('role', action.payload.role);
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
