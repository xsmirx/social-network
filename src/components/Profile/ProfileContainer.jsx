import React from "react";
import axios from "axios";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.auth.id || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
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
