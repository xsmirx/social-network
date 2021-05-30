import React from "react";
import {
  addPostActionCreator,
  onTextAreaChangeActionCreator,
} from "../../../../redux/profile-reducer";
import { TextArea } from "./TextArea";

export function TextAreaContainer(props) {
  let state = props.store.getState();

  let onTextAreaChange = (text) => {
    let action = onTextAreaChangeActionCreator(text);
    props.store.dispatch(action);
  };

  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  return (
    <TextArea
      updateNewPostText={onTextAreaChange}
      addPost={addPost}
      textAreaValue={state.profilePage.textAreaValue}
    />
  );
}
