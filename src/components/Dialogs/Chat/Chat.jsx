import React from "react";
import style from "./Chat.module.css";
import { Message } from "./Message/Message";

export const Chat = (props) => {
  let messages = props.data.map((item) => (
    <Message message={item.message} fromMe={item.fromMe} />
  ));

  let textarea = React.createRef();
  let sendMessage = () => alert(textarea.current.value);

  return (
    <div className={style.block}>
      <div className={style.block__message}>{messages}</div>

      <div className={style.block__input}>
        <div className={style.block__textarea}>
          <textarea name="message" ref={textarea}></textarea>
        </div>
        <div className={style.block__send}>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
