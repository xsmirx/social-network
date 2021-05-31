import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../../../StoreContext";
// import { Post } from "./Post/Post";
import { Posts } from "./Posts";

// export const PostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let posts = store.getState().profilePage.posts;
//         let postsElement = posts.map((post) => (
//           <Post text={post.message} likesCount={post.likesCount} />
//         ));
//         return <div>{postsElement}</div>;
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};
export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
