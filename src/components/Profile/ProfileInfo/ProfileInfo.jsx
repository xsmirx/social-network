import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
import Avatar from "./Avatar/Avatar";
import ProfileButtons from "./ProfileButtons/ProfileButtons";
import { useState } from "react";
import ProfileInformationForm from "./ProfileInformationForm/ProfileInformationForm";
import ProfileInformation from "./ProfileInformation/ProfileInformation";

export const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const setUserData = async (profile) => {
    await props.setProfile(profile);
    setEditMode(false);
  };

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
            editMode={editMode}
            setEditMode={setEditMode}
            userId={props.profile.userId}
            isOwner={props.isOwner}
            isFollow={props.isFollow}
            isFetchingFollow={props.isFetchingFollow}
            setFollow={props.setFollow}
            setUnfollow={props.setUnfollow}
          />
        </div>
        <div className={style.profileinfo__about}>
          {editMode ? (
            <ProfileInformationForm
              status={props.status}
              setStatus={props.setStatus}
              profile={props.profile}
              setProfile={setUserData}
              isOwner={props.isOwner}
            />
          ) : (
            <ProfileInformation
              profile={props.profile}
              status={props.status}
              setStatus={props.setStatus}
              isOwner={props.isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};
