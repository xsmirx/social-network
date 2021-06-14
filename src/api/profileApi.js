import { instance } from "./instance";

const getProfile = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => response.data);
};

export const profileApi = { getProfile };
