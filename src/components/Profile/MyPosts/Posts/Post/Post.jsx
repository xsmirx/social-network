import React from "react";
import style from "./Post.module.css";
import avatar from "./../../../../../assets/user.png";

export function Post(props) {
  return (
    <div className={style.post}>
      <div className={style.post__username}>Ivan</div>
      <div className={style.post__body}>
        <div className={style.post__avatar}>
          <img src={avatar} alt="" />
        </div>
        <div className={style.post__text}>
          <p>{props.text}</p>
        </div>
      </div>
      <div className={style.post__likes}>
        <p>Likes: {props.likesCount}</p>
      </div>
    </div>
  );
}
