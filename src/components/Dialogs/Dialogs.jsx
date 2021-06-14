import React from "react";
import style from "./Dialogs.module.css";
import { ChatContainer } from "./Chat/ChatContainer";
import { DialogsNameContainer } from "./DialogsName/DialogsNameContainer";
import { Redirect } from "react-router-dom";

export const Dialogs = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div className={style.dialogs}>
      <DialogsNameContainer />
      <div className={style.dialogs__messeges}>
        <ChatContainer />
      </div>
    </div>
  );
};
