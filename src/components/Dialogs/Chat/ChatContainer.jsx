import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../../redux/dialogs-reducer";
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
    updateNewMessageBody: (text) => {
      let action = updateNewMessageBodyActionCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageActionCreator();
      dispatch(action);
    },
  };
};

export const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
