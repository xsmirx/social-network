import React from "react";
import style from "./ProfileInformation.module.css";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

const ProfileInformation = (props) => {
  // create validate external link with hhtps:// in a begin this string
  const createSocialLink = (link) => {
    if (link.indexOf("http://") === -1 && link.indexOf("https://") === -1) {
      return `https://${link}`;
    }
    return link;
  };

  // create array with social link elements
  const socialLinks = Object.keys(props.profile.contacts)
    .filter((value) => props.profile.contacts[value])
    .map((value) => (
      <p key={value}>
        <b>{`${value}: `}</b>
        <a
          href={createSocialLink(props.profile.contacts[value])}
          target="_blank"
          rel="noreferrer"
        >
          {props.profile.contacts[value]}
        </a>
      </p>
    ));

  return (
    <>
      <div className={style.header}>
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus
          status={props.status}
          setStatus={props.setStatus}
          isOwner={props.isOwner}
        />
      </div>
      <div className={style.about}>
        <div className={style.aboutMe}>
          <div>{props.profile.aboutMe && <p>{props.profile.aboutMe}</p>}</div>
          <div>
            {props.profile.lookingForAJob && <p>Открыт к предложениям</p>}
            {props.profile.lookingForAJobDescription && (
              <p>{props.profile.lookingForAJobDescription}</p>
            )}
          </div>
        </div>
        <div className={style.links}>{socialLinks}</div>
      </div>
    </>
  );
};

export default ProfileInformation;
