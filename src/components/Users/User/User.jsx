import React from "react";
import style from "./User.module.css";
import avatar from "../../../assets/user.png";

export const User = (props) => {
  return (
    <div className={style.user}>
      <div className={style.avatar}>
        <img src={props.avatarUrl || avatar} />
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
            <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(props.id)}>Follow</button>
          )}
        </div>
      </div>
    </div>
  );
};
