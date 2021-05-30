import React from "react";
import style from "./MyPosts.module.css";
import { PostsContainer } from "./Posts/PostsContainer";
import { TextAreaContainer } from "./TextArea/TextAreaContainer";

export const MyPosts = () => {
  return (
    <div className={style.myposts}>
      <TextAreaContainer />
      <PostsContainer />
    </div>
  );
};
