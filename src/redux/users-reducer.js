const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   avatarUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
    //   fullName: "Inna",
    //   status: "I love Ivan",
    //   location: { city: "Magnitogorsk", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   avatarUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
    //   fullName: "Masha",
    //   status: "I love Ivan",
    //   location: { city: "Moskow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   avatarUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
    //   fullName: "Mira",
    //   status: "I love Ivan",
    //   location: { city: "Minsk", country: "Belarus" },
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   avatarUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
    //   fullName: "Nastya",
    //   status: "I love Ivan",
    //   location: { city: "NY", country: "USA" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
