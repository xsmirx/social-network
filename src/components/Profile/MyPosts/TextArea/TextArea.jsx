import React from "react";
import style from "./Textarea.module.css";

export function TextArea(props) {
  
  let onTextAreaChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={style.addpost}>
      <div className={style.textarea}>
        <textarea onChange={onTextAreaChange} value={props.textAreaValue} />
      </div>
      <div className={style.button}>
        <button onClick={onAddPost} type="submit">
          add Post
        </button>
      </div>
    </div>
  );
}
