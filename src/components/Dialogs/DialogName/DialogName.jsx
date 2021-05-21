import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css";

export const DialogName = (props) => {
  return (
    <NavLink to={`/dialogs/${props.id}`} className={style.dialogs__user}>
      {props.name}
    </NavLink>
  );
};