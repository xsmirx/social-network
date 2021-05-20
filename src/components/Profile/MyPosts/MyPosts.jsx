import React from "react";
import style from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { TextArea } from "./TextAreaForPost/TextArea";

export const MyPosts = (props) => {
  let posts = [
    { id: 1, messege: "Lorem", likesCount: 12 },
    {
      id: 2,
      messege: "Hello, best of the best social network!",
      likesCount: 87,
    },
    { id: 3, messege: "wow!", likesCount: 4 },
  ];
  let postsElement = posts.map((post) => (
    <Post text={post.messege} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.myposts}>
      <TextArea />
      {postsElement}
    </div>
  );
};
