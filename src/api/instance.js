import * as axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "7972be0e-bbb0-4c06-8150-e10a23a2565b",
  },
});
