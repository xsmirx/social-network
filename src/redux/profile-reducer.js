import { profileApi } from "../api/profileApi";
import { usersAPI } from "../api/usersApi";

// actions
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const SET_FOLLOW = "SET_FOLLOW_INFO";
const SET_IS_FETCHING_FOLLOW = "SET_IS_FETCHING_FOLLOW";

// initial values
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
};

// reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.post,
            likesCount: 0,
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...state.profile, ...action.profile },
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    case SET_FOLLOW:
      return {
        ...state,
        isFollow: action.followInfo,
      };
    case SET_IS_FETCHING_FOLLOW:
      return {
        ...state,
        isFetchingFollow: action.fetching,
      };
    default:
      return state;
  }
};

// action creators
export const addPostActionCreator = (post) => ({
  type: ADD_POST,
  post,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const setUserPhotoSuccess = (photos) => ({
  type: SET_USER_PHOTO,
  photos,
});
const setFollowSuccess = (followInfo) => ({ type: SET_FOLLOW, followInfo });
const setIsFetchigFollowSuccess = (fetching) => ({
  type: SET_IS_FETCHING_FOLLOW,
  fetching,
});

// thunks (side-effects only here)
export const getProfile = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId);
  dispatch(setUserProfile(response));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId);
  dispatch(setUserStatus(response));
};
export const getFollow = (userId) => async (dispatch) => {
  let response = await usersAPI.getFollowInfo(userId);
  dispatch(setFollowSuccess(response));
};

export const setStatus = (status) => async (dispatch) => {
  let response = await profileApi.setStatus(status);
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const setProfile = (profile) => async (dispatch) => {
  let response = await profileApi.setProfile(profile);
  if (response.resultCode === 0) {
    dispatch(setUserProfile(profile));
  }
};
export const setFollow = (userId) => async (dispatch) => {
  dispatch(setIsFetchigFollowSuccess(true));
  let response = await usersAPI.follow(userId);
  if (response.resultCode === 0) {
    dispatch(setFollowSuccess(true));
  }
  dispatch(setIsFetchigFollowSuccess(false));
};
export const setUnfollow = (userId) => async (dispatch) => {
  dispatch(setIsFetchigFollowSuccess(true));
  let response = await usersAPI.unfollow(userId);
  if (response.resultCode === 0) {
    dispatch(setFollowSuccess(false));
  }
  dispatch(setIsFetchigFollowSuccess(false));
};
export const setUserPhoto = (photo) => async (dispatch) => {
  let response = await profileApi.setUserPhoto(photo);
  if (response.resultCode === 0) {
    dispatch(setUserPhotoSuccess(response.data.photos));
  }
};

export default profileReducer;
