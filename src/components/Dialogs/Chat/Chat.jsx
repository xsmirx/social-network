import React from "react";
import style from "./Chat.module.css";
import { Message } from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../../redux/dialogs-reducer";

export const Chat = (props) => {
  let messages = props.data.chat.map((item) => (
    <Message message={item.message} fromMe={item.fromMe} />
  ));

  let textarea = React.createRef();

  let updateNewMessageBody = (event) => {
    let action = updateNewMessageBodyActionCreator(event.target.value);
    props.dispatch(action);
  };

  let sendMessage = () => {
    let action = sendMessageActionCreator();
    props.dispatch(action);
  };
  return (
    <div className={style.block}>
      <div className={style.block__message}>{messages}</div>

      <div className={style.block__input}>
        <div className={style.block__textarea}>
          <textarea
            name="message"
            ref={textarea}
            onChange={updateNewMessageBody}
            value={props.data.newMessageBody}
          ></textarea>
        </div>
        <div className={style.block__send}>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
