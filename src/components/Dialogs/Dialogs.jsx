import React from "react";
import style from "./Dialogs.module.css";
import { ChatContainer } from "./Chat/ChatContainer";
import { DialogsNameContainer } from "./DialogsName/DialogsNameContainer";

export const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <DialogsNameContainer />
      <div className={style.dialogs__messeges}>
        <ChatContainer />
      </div>
    </div>
  );
};
