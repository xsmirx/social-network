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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
