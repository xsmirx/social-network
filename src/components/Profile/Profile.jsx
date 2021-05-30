import React from "react";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPosts } from "./MyPosts/MyPosts";

export function Profile() {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
