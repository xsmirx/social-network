import React from "react";
import style from "./Friends.module.css";
import { User } from "./User/User";

export const Friends = (props) => {
  let users = props.friends.map((friend) => <User name={friend.name} />);
  return (
    <div className={style.block}>
      <h2>Friends</h2>
      <div className={style.block__friends}>{users}</div>
    </div>
  );
};
