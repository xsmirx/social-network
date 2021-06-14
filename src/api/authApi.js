import { instance } from "./instance";

const authMe = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const authApi = { authMe };
