const SET_DATA = "SET_DATA";

const loginReducer = (state = null, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        login: action.data.login,
        password: action.data.password,
        rememberMe: action.data.rememberMe,
      };
    default:
      return state;
  }
};

export const setData = (data) => ({ type: SET_DATA, data });

export default loginReducer;
