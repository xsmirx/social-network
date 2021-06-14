import React from "react";
import style from "./User.module.css";
import avatar from "../../../assets/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/usersApi";

export const User = (props) => {
  let follow = (userId) => {
    props.toggleFollowProgress(userId);
    usersAPI.follow(userId).then((response) => {
      if (response.resultCode === 0) {
        props.follow(userId);
        props.toggleFollowProgress(userId);
      }
    });
  };
  let unfollow = (userId) => {
    props.toggleFollowProgress(userId);
    usersAPI.unfollow(userId).then((response) => {
      if (response.resultCode === 0) {
        props.unfollow(userId);
        props.toggleFollowProgress(userId);
      }
    });
  };
  return (
    <div className={style.user}>
      <div className={style.avatar}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.avatarUrl || avatar} />
        </NavLink>
      </div>
      <div className={style.title}>
        <div className={style.subtitle}>
          <div className={style.description}>
            <p className={style.fullname}>{props.fullName}</p>
            <p className="status">{props.status || "no status"}</p>
          </div>
          <div className={style.location}>
            <p className="country">{"props.location.country"}</p>
            <p className="city">{"props.location.city"}</p>
          </div>
        </div>
        <div className="button">
          {props.followed ? (
            <button
              disabled={props.isFollowProgress.some((id) => id === props.id)}
              onClick={() => unfollow(props.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.isFollowProgress.some((id) => id === props.id)}
              onClick={() => follow(props.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
