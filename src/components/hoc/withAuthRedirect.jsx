import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export let withAuthRedirect = (Component) => {

  let wrapperComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  let CannectedWrapperComponent = connect(mapStateToProps)(wrapperComponent);
  
  return CannectedWrapperComponent;
};
