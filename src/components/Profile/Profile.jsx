import React from "react";
import style from "./profile.module.css";
import { TextArea } from "./TextAreaForPost/TextArea";
import { Post } from "./Post/Post";

export function Profile() {
  return (
    <div className={`${style.profile} App__block`}>
      <img
        src="https://image.freepik.com/free-vector/rainbow-coloured-abstract-low-poly-banner-design_1048-12818.jpg"
        className="profile__background"
      />
      <div className={style.profile__avatar}>
        <img src="" alt="" />
      </div>
      <div className={style.profile__description}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <TextArea />
      <Post text="Lorem" />
      <Post text="Hello, best of the best social network!" />
      <Post text="wow!" />
    </div>
  );
}
