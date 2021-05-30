import React from "react";
import style from "./Chat.module.css";
import { Message } from "./Message/Message";

export const Chat = (props) => {
  let messages = props.chat.map((item) => (
    <Message message={item.message} fromMe={item.fromMe} />
  ));

  let updateNewMessageBody = (event) => {
    let text = event.target.value;
    props.updateNewMessageBody(text);
  };

  let sendMessage = () => {
    props.sendMessage();
  };
  return (
    <div className={style.block}>
      <div className={style.block__message}>{messages}</div>

      <div className={style.block__input}>
        <div className={style.block__textarea}>
          <textarea
            onChange={updateNewMessageBody}
            value={props.newMessageBody}
          ></textarea>
        </div>
        <div className={style.block__send}>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
