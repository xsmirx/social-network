import React from "react";
import style from "./User.module.css";

export const User = (props) => {
  return (
    <div className={style.block}>
      <img src="./avatar.jpg" alt="" />
      <p>{props.name}</p>
    </div>
  );
};
