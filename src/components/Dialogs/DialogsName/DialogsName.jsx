import React from "react";
import style from "./DialogsName.module.css";
import { DialogName } from "./DialogName/DialogName";

export const DialogsName = (props) => {
  let dialogElements = props.dialogs.map((dialog) => (
    <DialogName
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      lastMessege={dialog.lastMessege}
      timeLastMessege={dialog.timeLastMessege}
    />
  ));

  return <div className={style.dialogs}>{dialogElements}</div>;
};
