import api from './axiosInstance';

export const loginApi = async (username, password) => {
  const res = await api.post('/Login/Login', {
    email_: username,
    password_: password,
    usertypeflag_: 1,
  });
  return res.data;
};
