import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import Avatar from "./Avatar/Avatar";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import { useState } from "react";

export const ProfileInfo = (props) => {
  // let [editMode, setEditMode] = useState();

  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.profileinfo}>
      <div className={style.profileinfo__description}>
        <div className={style.profileinfo__avtarAndButtons}>
          <Avatar
            profileFoto={props.profile.photos.large}
            setUserPhoto={props.setUserPhoto}
            isOwner={props.isOwner}
          />
          <ProfileButtons
            userId={props.profile.userId}
            isOwner={props.isOwner}
            isFollow={props.isFollow}
            isFetchingFollow={props.isFetchingFollow}
            setFollow={props.setFollow}
            setUnfollow={props.setUnfollow}
          />
        </div>
        <div className={style.profileinfo__about}>
          <h2>{props.profile.fullName}</h2>
          <ProfileStatus
            status={props.status}
            setStatus={props.setStatus}
            isOwner={props.isOwner}
          />
        </div>
      </div>
    </div>
  );
};
