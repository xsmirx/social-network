import React from "react";
import style from "./Profile.module.css";
import { TextArea } from "./TextAreaForPost/TextArea";
import { Post } from "./Post/Post";

export function Profile() {
  return (
    <div className={style.profile}>
      <img
        src="https://image.freepik.com/free-vector/rainbow-coloured-abstract-low-poly-banner-design_1048-12818.jpg"
        className={style.profile__background}
      />
      <div className={style.profile__description}>
        <img src="./avatar.jpg" alt="" />
        <div className={style.profile__about}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <TextArea />
      <Post text="Lorem" />
      <Post text="Hello, best of the best social network!" />
      <Post text="wow!" />
    </div>
  );
}
