import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, setStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.auth.id || 16929;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        setStatus={this.props.setStatus}
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
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getProfile, getStatus, setStatus })
)(ProfileContainer);
