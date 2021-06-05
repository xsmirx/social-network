import { connect } from "react-redux";
import { DialogsName } from "./DialogsName";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export const DialogsNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsName);
