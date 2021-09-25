import React from "react";
import { User } from "./User/User";
import style from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "./Paginator/Paginator";

export const Users = (props) => {
  let users = props.users.map((u) => {
    return (
      <User
        key={u.id}
        id={u.id}
        followed={u.followed}
        avatarUrl={u.photos.small}
        fullName={u.name}
        status={u.status}
        isFollowProgress={props.isFollowProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });
  return (
    <div className={style.users}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.isFetching ? <Preloader /> : users}
    </div>
  );
};
