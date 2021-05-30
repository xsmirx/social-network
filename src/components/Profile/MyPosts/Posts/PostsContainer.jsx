import React from "react";
import { Post } from "./Post/Post";

export const PostsContainer = (props) => {
  let posts = props.store.getState().profilePage.posts;
  let postsElement = posts.map((post) => (
    <Post text={post.message} likesCount={post.likesCount} />
  ));
  return <div>{postsElement}</div>;
};
