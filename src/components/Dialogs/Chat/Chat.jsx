import React from "react";
import style from "./Chat.module.css";
import { Message } from "./Message/Message";

export const Chat = (props) => {
  let messages = props.data.map((item) => (
    <Message message={item.message} fromMe={item.fromMe} />
  ));

  return (
    <div className={style.block}>
      <div className={style.block__message}>{messages}</div>

      <div className={style.block__input}>
        <div className={style.block__textarea}>
          <textarea name="message" id=""></textarea>
        </div>
        <div className={style.block__send}>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
