import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.auth.id || 2;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const ProfileContainerWithAuthRedirec = withAuthRedirect(ProfileContainer)
const ProfileContainetWithRouter = withRouter(ProfileContainerWithAuthRedirec);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(
  ProfileContainetWithRouter
);
