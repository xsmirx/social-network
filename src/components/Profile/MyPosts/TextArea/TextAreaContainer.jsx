import { connect } from "react-redux";
import { addPostActionCreator } from "../../../../redux/profile-reducer";
import { TextArea } from "./TextArea";

let mapStateToProps = (state) => {
  return {
    textAreaValue: state.profilePage.textAreaValue,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      let action = addPostActionCreator(post);
      dispatch(action);
    },
  };
};

export const TextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
