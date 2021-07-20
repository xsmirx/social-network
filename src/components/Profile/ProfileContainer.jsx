import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getFollow,
  getProfile,
  getStatus,
  setFollow,
  setProfile,
  setStatus,
  setUnfollow,
  setUserPhoto,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  getUserInfo() {
    let userId = this.props.match.params.userId || this.props.auth.id;
    if (userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
      this.props.getFollow(userId);
    }
  }
  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.getUserInfo();
    }
  }
  render() {
    let userId = this.props.match.params.userId || this.props.auth.id;
    if (!userId) {
      return <Redirect to="/login" />;
    }
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        isFollow={this.props.isFollow}
        isFetchingFollow={this.props.isFetchingFollow}
        setProfile={this.props.setProfile}
        setFollow={this.props.setFollow}
        setUnfollow={this.props.setUnfollow}
        setStatus={this.props.setStatus}
        setUserPhoto={this.props.setUserPhoto}
        isOwner={!this.props.match.params.userId}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isFollow: state.profilePage.isFollow,
  isFetchingFollow: state.profilePage.isFetchingFollow,
  auth: state.auth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    getFollow,
    setProfile,
    setStatus,
    setUserPhoto,
    setFollow,
    setUnfollow,
  })
)(ProfileContainer);
