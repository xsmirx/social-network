import React from "react";
import style from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { TextArea } from "./TextAreaForPost/TextArea";

export const MyPosts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post text={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={style.myposts}>
      <TextArea
        addPost={props.addPost}
        textAreaInput={props.textAreaInput}
        dispatch={props.dispatch}
      />
      {postsElement}
    </div>
  );
};
