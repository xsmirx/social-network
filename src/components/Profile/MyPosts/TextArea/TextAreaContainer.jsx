import { connect } from "react-redux";
import {
  addPostActionCreator,
  onTextAreaChangeActionCreator,
} from "../../../../redux/profile-reducer";
import { TextArea } from "./TextArea";

let mapStateToProps = (state) => {
  return {
    textAreaValue: state.profilePage.textAreaValue,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = onTextAreaChangeActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
  };
};

export const TextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
