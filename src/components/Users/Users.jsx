import React from "react";
import { User } from "./User/User";
import style from "./Users.module.css";
import * as axios from "axios";

export const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  let users = props.users.map((u) => {
    return (
      <User
        key={u.id}
        followed={u.followed}
        avatarUrl={u.photos.small}
        fullName={u.name}
        status={u.status}
        location={u.location}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });
  return (
    <div className={style.users}>
      <button onClick={getUsers}>getUsers</button>
      {users}
    </div>
  );
};
