import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogName = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={style.dialogs__user}>
      {props.name}
    </NavLink>
  );
};

const Messege = (props) => {
  return (
    <div className={style.dialogs__messege}>
      <p>{props.message}</p>
    </div>
  );
};

export const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__users}>
        <DialogName id="1" name="Inna" />
        <DialogName id="2" name="Ivan" />
        <DialogName id="3" name="Nastya" />
        <DialogName id="4" name="Lena" />
        <DialogName id="5" name="Tasya" />
      </div>
      <div className={style.dialogs__messeges}>
        <Messege message="Hi" />
        <Messege message="How are you?" />
        <Messege message="Bla bla bla" />
      </div>
    </div>
  );
};
