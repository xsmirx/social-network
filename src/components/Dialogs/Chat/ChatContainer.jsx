import { sendMessageActionCreator } from "../../../redux/dialogs-reducer";
import { Chat } from "./Chat";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
    chat: state.dialogsPage.chat,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      let action = sendMessageActionCreator(message);
      dispatch(action);
    },
  };
};

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
