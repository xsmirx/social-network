import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authApi } from "../../api/authApi";
import { setAuthUserData } from "../../redux/auth-reduser";
import { Header } from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authApi.authMe().then((response) => {
      if (response.resultCode === 0) {
        this.props.setAuthUserData(
          response.data.id,
          response.data.email,
          response.data.login
        );
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
