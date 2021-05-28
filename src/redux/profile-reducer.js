const UPDATE_TEXT_AREA_POST = "UPDATE-TEXT-AREA-POST";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TEXT_AREA_POST:
      state.textAreaInput = action.newText;
      return state;
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.textAreaInput,
        likesCount: 8,
      };
      state.posts.push(newPost);
      state.textAreaInput = "";
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
