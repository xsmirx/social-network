import React from "react";
import { Message } from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../../redux/dialogs-reducer";
import { Chat } from "./Chat";

export const ChatContainer = (props) => {
  let chat = props.store.getState().dialogsPage.chat;
  let newMessageBody = props.store.getState().dialogsPage.newMessageBody;

  let updateNewMessageBody = (text) => {
    let action = updateNewMessageBodyActionCreator(text);
    props.store.dispatch(action);
  };

  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.store.dispatch(action);
  };

  return (
    <Chat
      updateNewMessageBody={updateNewMessageBody}
      sendMessage={sendMessage}
      newMessageBody={newMessageBody}
      chat={chat}
    />
  );
};
