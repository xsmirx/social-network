import React from "react";
import style from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { TextArea } from "./TextAreaForPost/TextArea";

export const MyPosts = (props) => {
  return (
    <div className={style.myposts}>
      <TextArea />
      <Post text="Lorem" />
      <Post text="Hello, best of the best social network!" />
      <Post text="wow!" />
    </div>
  );
};
