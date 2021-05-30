import React from "react";
import style from "./Dialogs.module.css";
import { DialogName } from "./DialogName/DialogName";
import { ChatContainer } from "./Chat/ChatContainer";

export const Dialogs = (props) => {
  let dialogElements = props.data.dialogs.map((dialog) => (
    <DialogName
      id={dialog.id}
      name={dialog.name}
      lastMessege={dialog.lastMessege}
      timeLastMessege={dialog.timeLastMessege}
    />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__users}>{dialogElements}</div>
      <div className={style.dialogs__messeges}>
        <ChatContainer />
      </div>
    </div>
  );
};
