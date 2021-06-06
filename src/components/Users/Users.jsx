import React from "react";
import { User } from "./User/User";
import style from "./Users.module.css";

export const Users = (props) => {
  // not pure function
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
        fullName: "Inna",
        status: "I love Ivan",
        location: { city: "Magnitogorsk", country: "Russia" },
      },
      {
        id: 2,
        followed: false,
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
        fullName: "Masha",
        status: "I love Ivan",
        location: { city: "Moskow", country: "Russia" },
      },
      {
        id: 3,
        followed: true,
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
        fullName: "Mira",
        status: "I love Ivan",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 4,
        followed: false,
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
        fullName: "Nastya",
        status: "I love Ivan",
        location: { city: "NY", country: "USA" },
      },
    ]);
  }
  //----

  let users = props.users.map((u) => {
    return (
      <User
        id={u.id}
        followed={u.followed}
        avatarUrl={u.avatarUrl}
        fullName={u.fullName}
        status={u.status}
        location={u.location}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });
  return <div className={style.users}>{users}</div>;
};
