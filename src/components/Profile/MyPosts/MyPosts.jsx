import React from "react";
import style from "./MyPosts.module.css";
import { PostsContainer } from "./Posts/PostsContainer";
import { TextAreaContainer } from "./TextArea/TextAreaContainer";

export const MyPosts = React.memo(() => {
  console.log("render");
  return (
    <div className={style.myposts}>
      <TextAreaContainer />
      <PostsContainer />
    </div>
  );
});
