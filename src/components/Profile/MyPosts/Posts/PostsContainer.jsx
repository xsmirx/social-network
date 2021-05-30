import React from "react";
import StoreContext from "../../../../StoreContext";
import { Post } from "./Post/Post";

export const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let posts = store.getState().profilePage.posts;
        let postsElement = posts.map((post) => (
          <Post text={post.message} likesCount={post.likesCount} />
        ));
        return <div>{postsElement}</div>;
      }}
    </StoreContext.Consumer>
  );
};
