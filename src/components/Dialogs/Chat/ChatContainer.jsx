import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../../redux/dialogs-reducer";
import { Chat } from "./Chat";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";

// export const ChatContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let chat = store.getState().dialogsPage.chat;
//         let newMessageBody = store.getState().dialogsPage.newMessageBody;

//         let updateNewMessageBody = (text) => {
//           let action = updateNewMessageBodyActionCreator(text);
//           store.dispatch(action);
//         };

//         let sendMessage = () => {
//           let action = sendMessageActionCreator();
//           store.dispatch(action);
//         };
//         return (
//           <Chat
//             updateNewMessageBody={updateNewMessageBody}
//             sendMessage={sendMessage}
//             newMessageBody={newMessageBody}
//             chat={chat}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

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
