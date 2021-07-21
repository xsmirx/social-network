import { authApi } from "../api/authApi";
import { securityApi } from "../api/securityApi";

// actions
const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const SET_MESSAGES = "samurai-network/auth/SET_MESSAGES";
const SET_CAPTCHA_URL = "samurai-network/security/SET_CAPTCHA_URL";

// initial values
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  messages: [],
};

// reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.arrayMessages,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

// action creators
export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const setMessages = (arrayMessages) => ({
  type: SET_MESSAGES,
  arrayMessages,
});
const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });

//thunks (side-effect only here)
export const authMe = () => async (dispatch) => {
  let response = await authApi.authMe();
  if (response.resultCode === 0) {
    dispatch(
      setAuthUserData(
        response.data.id,
        response.data.email,
        response.data.login,
        true
      )
    );
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe, captcha);
    if (response.resultCode === 0) {
      dispatch(authMe());
      dispatch(setCaptchaUrl(null));
    } else if (response.resultCode === 10) {
      dispatch(setMessages(response.messages));
      dispatch(getCaptchaUrl());
    }
  };

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityApi.getCaptchaUrl();
  dispatch(setCaptchaUrl(response.url));
};

export default authReducer;
