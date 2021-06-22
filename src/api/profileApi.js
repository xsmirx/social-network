import { instance } from "./instance";

const getProfile = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => response.data);
};

const getStatus = (userId) => {
  return instance
    .get(`profile/status/${userId}`)
    .then((response) => response.data);
};

const setStatus = (status) => {
  return instance
    .put(`profile/status`, { status })
    .then((response) => response.data);
};

export const profileApi = { getProfile, getStatus, setStatus };
