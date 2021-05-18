import React from "react";
import style from "./post.module.css";

export function Post(props) {
  return (
    <div className={style.post}>
      <div className={style.post__username}>Ivan</div>
      <div className={style.post__body}>
        <div className={style.post__avatar}>
          <img src="./avatar.jpg" alt="" />
        </div>
        <div className={style.post__text}>
          <p>
            {props.text}
          </p>
      </div>
      </div>
    </div>
  );
}
