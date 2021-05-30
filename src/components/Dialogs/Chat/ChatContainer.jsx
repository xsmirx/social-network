import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../../redux/dialogs-reducer";
import { Chat } from "./Chat";
import StoreContext from "../../../StoreContext";

export const ChatContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let chat = store.getState().dialogsPage.chat;
        let newMessageBody = store.getState().dialogsPage.newMessageBody;

        let updateNewMessageBody = (text) => {
          let action = updateNewMessageBodyActionCreator(text);
          store.dispatch(action);
        };

        let sendMessage = () => {
          let action = sendMessageActionCreator();
          store.dispatch(action);
        };
        return (
          <Chat
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
            newMessageBody={newMessageBody}
            chat={chat}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
