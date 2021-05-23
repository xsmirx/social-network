import React from "react";
import style from "./Textarea.module.css";

export function TextArea(props) {
  let textarea = React.createRef();
  let addPost = () => props.addPost(textarea.current.value);

  return (
    <div className={style.addpost}>
      <div className={style.textarea}>
        <textarea ref={textarea} name="post" id=""></textarea>
      </div>
      <div className={style.button}>
        <button onClick={addPost} type="submit">
          add Post
        </button>
      </div>
    </div>
  );
}
