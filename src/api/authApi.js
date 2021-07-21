import { instance } from "./instance";

const authMe = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

const login = (email, password, rememberMe = false, captcha) => {
  return instance
    .post(`auth/login`, { email, password, rememberMe, captcha })
    .then((response) => response.data);
};

const logout = () => {
  return instance.delete(`auth/login`).then((response) => response.data);
};

export const authApi = { authMe, login, logout };
