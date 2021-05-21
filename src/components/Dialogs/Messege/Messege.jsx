import React from "react";
import style from "./../Dialogs.module.css";

export const Messege = (props) => {
  return (
    <div className={style.dialogs__messege}>
      <p>{props.message}</p>
    </div>
  );
};