import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { profileApi } from "../../api/profileApi";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.auth.id || 2;
    profileApi.getProfile(userId).then((response) => {
      this.props.setUserProfile(response);
    });
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

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainetWithRouter
);
