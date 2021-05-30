import React from "react";
import style from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { TextAreaContainer } from "./TextArea/TextAreaContainer";

export const MyPosts = (props) => {
  // элементы грязной компоненты для Post. Подумать как зарефакториить на контейнерную компоненту и чистую компоненту.
  let posts = props.store.getState().profilePage.posts;
  let postsElement = posts.map((post) => (
    <Post text={post.message} likesCount={post.likesCount} />
  ));
  //----------------------

  return (
    <div className={style.myposts}>
      <TextAreaContainer store={props.store} />
      {postsElement}
    </div>
  );
};
