import { instance } from "./instance";

const getProfile = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => response.data);
};

const setProfile = (profile) => {
  return instance.put("profile", profile).then((response) => response.data);
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
const setUserPhoto = (photo) => {
  let formData = new FormData();
  formData.set("image", photo);
  return instance
    .put("profile/photo", formData, { contentType: "multypal/form-data" })
    .then((response) => response.data);
};

export const profileApi = {
  getProfile,
  setProfile,
  getStatus,
  setStatus,
  setUserPhoto,
};
