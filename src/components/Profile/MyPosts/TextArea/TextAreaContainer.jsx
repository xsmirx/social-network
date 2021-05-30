import React from "react";
import {
  addPostActionCreator,
  onTextAreaChangeActionCreator,
} from "../../../../redux/profile-reducer";
import StoreContext from "../../../../StoreContext";
import { TextArea } from "./TextArea";

export function TextAreaContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let onTextAreaChange = (text) => {
          let action = onTextAreaChangeActionCreator(text);
          store.dispatch(action);
        };

        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };
        return (
          <TextArea
            updateNewPostText={onTextAreaChange}
            addPost={addPost}
            textAreaValue={state.profilePage.textAreaValue}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
