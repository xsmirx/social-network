import React from "react";
import style from "./Textarea.module.css";

export function TextArea() {
  return (
    <div className={style.textarea}>
      <form action="">
        <input type="textarea" name="post" id="" />
        <button type="submit">add Post</button>
      </form>
    </div>
  );
}
