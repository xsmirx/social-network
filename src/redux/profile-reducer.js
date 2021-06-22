import { profileApi } from "../api/profileApi";

const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
  profile: null,
  status: "default value",
  posts: [
    { id: 1, message: "Lorem", likesCount: 12 },
    {
      id: 2,
      message: "Hello, best of the best social network!",
      likesCount: 87,
    },
    { id: 3, message: "wow!", likesCount: 4 },
  ],
  textAreaValue: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT_AREA_POST:
      return {
        ...state,
        textAreaValue: action.newText,
      };
    case ADD_POST:
      return {
        ...state,
        textAreaValue: "",
        posts: [
          ...state.posts,
          {
            id: 4,
            message: state.textAreaValue,
            likesCount: 8,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const onTextAreaChangeActionCreator = (text) => ({
  type: UPDATE_TEXT_AREA_POST,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

//thunks

export const getProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export const getStatus = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setUserStatus(response));
  });
};

export const setStatus = (status) => (dispatch) => {
  profileApi.setStatus(status).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
