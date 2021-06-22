import React from "react";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo profile={props.profile} status={props.status} setStatus={props.setStatus}/>
      <MyPosts />
    </div>
  );
};
