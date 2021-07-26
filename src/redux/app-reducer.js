import { authMe } from "./auth-reduser";

// actions
const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED_SUCCESS";

// initial values
const initialState = {
  initialized: false,
};

// reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// action creators
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// thunks (side-effects only here)
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => dispatch(initializedSuccess()));
};

export default appReducer;
