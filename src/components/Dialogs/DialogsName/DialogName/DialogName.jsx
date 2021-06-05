import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogName.module.css";

export const DialogName = (props) => {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      className={style.dialog}
      activeClassName={style.dialog_active}
    >
      <div className={style.dialog__avatar}>
        <img src="./avatar.jpg" />
      </div>
      <div className={style.dialog__description}>
        <div className={style.dialog__title}>
          <p className={style.dialog__name}>{props.name}</p>
          <p className={style.dialog__time}>{props.timeLastMessege}</p>
        </div>
        <div className={style.dialog__lastMessege}>
          <p>{props.lastMessege}</p>
        </div>
      </div>
    </NavLink>
  );
};
