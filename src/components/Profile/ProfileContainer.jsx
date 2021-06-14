import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { profileApi } from "../../api/profileApi";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.auth.id || 2;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const ProfileContainetWithRouter = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(
  ProfileContainetWithRouter
);
