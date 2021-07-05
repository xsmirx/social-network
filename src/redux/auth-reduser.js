import { authApi } from "../api/authApi";

const SET_USER_DATA = "SET_USER_DATA";
const SET_MESSAGES = "SET_MESSAGES";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  messages: [],
};

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

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const setMessages = (arrayMessages) => ({
  type: SET_MESSAGES,
  arrayMessages,
});

//thunks

export const authMe = () => {
  return (dispatch) => {
    return authApi.authMe().then((response) => {
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
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
  return authApi.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(authMe());
    } else {
      dispatch(setMessages(response.messages));
    }
  });
};

export const logout = () => (dispatch) => {
  authApi.logout().then((response) => {
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
