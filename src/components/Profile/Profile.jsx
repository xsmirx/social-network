import React from "react";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPosts } from "./MyPosts/MyPosts";

export const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        isFollow={props.isFollow}
        isFetchingFollow={props.isFetchingFollow}
        setFollow={props.setFollow}
        setUnfollow={props.setUnfollow}
        setStatus={props.setStatus}
        setUserPhoto={props.setUserPhoto}
        isOwner={props.isOwner}
      />
      <MyPosts />
    </div>
  );
};
