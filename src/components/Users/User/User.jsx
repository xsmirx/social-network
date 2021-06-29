import React from "react";
import style from "./User.module.css";
import avatar from "../../../assets/user.png";
import { NavLink } from "react-router-dom";

export const User = (props) => {
  let button = props.followed ? (
    <button
      disabled={props.isFollowProgress.some((id) => id === props.id)}
      onClick={() => props.unfollow(props.id)}
    >
      Unfollow
    </button>
  ) : (
    <button
      disabled={props.isFollowProgress.some((id) => id === props.id)}
      onClick={() => props.follow(props.id)}
    >
      Follow
    </button>
  );
  return (
    <div className={style.user}>
      <div className={style.avatar}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.avatarUrl || avatar} alt="avatar"/>
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
        <div className="button">{button}</div>
      </div>
    </div>
  );
};
