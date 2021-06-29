import React from "react";
import { Post } from "./Post/Post";

export const Posts = (props) => {
  let postsElement = props.posts.map((post) => (
    <Post key={post.id} text={post.message} likesCount={post.likesCount} />
  ));
  return <div>{postsElement}</div>;
};