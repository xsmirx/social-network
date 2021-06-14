import { instance } from "./instance";

const getUsers = (currentPage = 1, pageSize = 100) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

const unfollow = (userId) => {
  return instance.delete(`follow/${userId}`).then((response) => response.data);
};

const follow = (userId) => {
  return instance.post(`follow/${userId}`).then((response) => response.data);
};

export const usersAPI = { getUsers, follow, unfollow };
