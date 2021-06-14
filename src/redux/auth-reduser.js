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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
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
            response.data.login
          )
        );
      }
    });
  };
};

export default authReducer;
