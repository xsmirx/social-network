import { profileApi } from "../api/profileApi";

const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  profile: null,
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

//thunks

export const getProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
  };
};

export default profileReducer;
