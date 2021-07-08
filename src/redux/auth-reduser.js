import { authApi } from "../api/authApi";

// actions
const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const SET_MESSAGES = "samurai-network/auth/SET_MESSAGES";

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

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authApi.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(authMe());
  } else {
    dispatch(setMessages(response.messages));
  }
};

export const logout = () => async (dispatch) => {
  let response = await authApi.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
