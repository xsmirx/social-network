import { connect } from "react-redux";
import { Friends } from "./Friends";

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
