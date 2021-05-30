const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";
const ADD_POST = "ADD-POST";

let initialState = {
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
      state.textAreaValue = action.newText;
      return state;
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.textAreaValue,
        likesCount: 8,
      };
      state.posts.push(newPost);
      state.textAreaValue = "";
      return state;
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

export default profileReducer;
