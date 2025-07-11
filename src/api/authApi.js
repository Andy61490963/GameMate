import axios from "./axiosInstance";

export const loginApi = async (username, password) => {
  const res = await axios.post("/Login/Login", {
    email_: username,
    password_: password,
    usertypeflag_: 1,
  });
  return res.data;
};
