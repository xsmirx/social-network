import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const DialogsContainer = connect(mapStateToProps, {})(Dialogs);
