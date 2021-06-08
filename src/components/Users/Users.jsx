import React from "react";
import { User } from "./User/User";
import style from "./Users.module.css";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }

  let pagesNumber = pages.map((p) => {
    return (
      <span
        className={
          props.currentPage === p ? style.selectedNumber : style.number
        }
        onClick={(e) => props.onPageChanged(p)}
      >
        {p}
      </span>
    );
  });
  let users = props.users.map((u) => {
    return (
      <User
        key={u.id}
        id={u.id}
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
      <div className="pageCount">
        <p>total users: {props.totalUsersCount}</p>
        <p>total pages: {pagesCount}</p>
        {pagesNumber}
      </div>
      {users}
      <div className="pageCount">
        <p>total users: {props.totalUsersCount}</p>
        <p>total pages: {pagesCount}</p>
        {pagesNumber}
      </div>
    </div>
  );
};
