import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  setStatus,
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
  auth: state.auth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getProfile, getStatus, setStatus, setUserPhoto })
)(ProfileContainer);
