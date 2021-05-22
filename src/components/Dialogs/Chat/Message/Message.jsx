import React from "react";
import style from "./Message.module.css";

export const Message = (props) => {
  if (props.fromMe) {
    let styleName = `${style.block} ${style.block__me}`;

    return (
      <div className={styleName}>
        <p>{props.message}</p>
      </div>
    );
  } else {
    let styleName = `${style.block} ${style.block__from}`;

    return (
      <div className={styleName}>
        <img src="./avatar.jpg" alt="" />
        <p>{props.message}</p>
      </div>
    );
  }
};
