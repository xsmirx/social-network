import React from "react";
import {
  addPostActionCreator,
  onTextAreaChangeActionCreator,
} from "../../../../redux/profile-reducer";
import style from "./Textarea.module.css";

export function TextArea(props) {
  let textarea = React.createRef();

  let onTextAreaChange = () => {
    let text = textarea.current.value;
    const action = onTextAreaChangeActionCreator(text);
    props.dispatch(action);
  };
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };
  return (
    <div className={style.addpost}>
      <div className={style.textarea}>
        <textarea
          onChange={onTextAreaChange}
          ref={textarea}
          value={props.textAreaInput}
        />
      </div>
      <div className={style.button}>
        <button onClick={addPost} type="submit">
          add Post
        </button>
      </div>
    </div>
  );
}
