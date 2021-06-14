import React from "react";
import { connect } from "react-redux";
import { authMe } from "../../redux/auth-reduser";
import { Header } from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
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

export default connect(mapStateToProps, { authMe })(HeaderContainer);
