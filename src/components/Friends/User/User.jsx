import React from "react";
import style from "./User.module.css";
import avatar from "./../../../assets/user.png";

export const User = (props) => {
  return (
    <div className={style.block}>
      <img src={avatar} alt="userAvatar" />
      <p>{props.name}</p>
    </div>
  );
};
