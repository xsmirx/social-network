import { connect } from "react-redux";
import { Posts } from "./Posts";

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
