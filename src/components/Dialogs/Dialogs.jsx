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
  let dialogs = [
    { id: 1, name: "Inna" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Nastya" },
    { id: 4, name: "Lena" },
    { id: 5, name: "Tasya" },
  ];
  let messeges = [
    { id: 1, messege: "Hi" },
    { id: 2, messege: "How are you?" },
    { id: 3, messege: "Bla bla bla" },
  ];

  let dialogElements = dialogs.map((dialog) => (
    <DialogName id={dialog.id} name={dialog.name} />
  ));
  let messegesElements = messeges.map((messege) => (
    <Messege message={messege.messege} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs__users}>{dialogElements}</div>
      <div className={style.dialogs__messeges}>{messegesElements}</div>
    </div>
  );
};
