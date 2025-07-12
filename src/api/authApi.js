import api from './axiosInstance';

export const loginApi = async (username, password) => {
  debugger;
  const res = await api.post('/Login/Login', {
    email_: username,
    password_: password,
    usertypeflag_: 1,
  });
  return res.data;
};
