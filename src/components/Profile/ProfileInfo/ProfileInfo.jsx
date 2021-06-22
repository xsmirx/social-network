import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={style.profileinfo}>
      <div className={style.profileinfo__description}>
        <img src={props.profile.photos.large} />
        <div className={style.profileinfo__about}>
          <p>
            <b>{props.profile.fullName}</b>
          </p>
          <ProfileStatus
            status={props.status}
            setStatus={props.setStatus}
          />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};
