import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import Avatar from "./Avatar/Avatar";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.profileinfo}>
      <div className={style.profileinfo__description}>
        <Avatar
          profileFoto={props.profile.photos.large}
          setUserPhoto={props.setUserPhoto}
          isOwner={props.isOwner}
        />
        <div className={style.profileinfo__about}>
          <h1>{props.profile.fullName}</h1>
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
