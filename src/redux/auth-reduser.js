import { authApi } from "../api/authApi";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

//thunks

export const authMe = () => {
  return (dispatch) => {
    authApi.authMe().then((response) => {
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
  authApi.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(authMe());
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
