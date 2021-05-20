import React from "react";
import style from "./Textarea.module.css";

export function TextArea() {
  return (
    <div className={style.addpost}>
      <div className={style.textarea}>
        <textarea name="post" id=""></textarea>
      </div>
      <div className={style.button}>
        <button type="submit">add Post</button>
      </div>
    </div>
  );
}
