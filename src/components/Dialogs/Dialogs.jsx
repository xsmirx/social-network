import React from "react";
import style from "./Dialogs.module.css";
import { DialogName } from "./DialogName/DialogName";
import { Messege } from "./Messege/Messege";

export const Dialogs = (props) => {
  
  let dialogElements = props.dialogs.map((dialog) => (
    <DialogName id={dialog.id} name={dialog.name} />
  ));
  let messegesElements = props.messeges.map((messege) => (
    <Messege message={messege.messege} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__users}>{dialogElements}</div>
      <div className={style.dialogs__messeges}>{messegesElements}</div>
    </div>
  );
};
