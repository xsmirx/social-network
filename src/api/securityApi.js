import { instance } from "./instance";

const getCaptchaUrl = () => {
  return instance
    .get("security/get-captcha-url")
    .then((response) => response.data);
};

export const securityApi = { getCaptchaUrl };
