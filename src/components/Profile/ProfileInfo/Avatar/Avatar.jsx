import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import style from "./Avatar.module.css";
import avatar from "./../../../../assets/user.png";

const Avatar = (props) => {
  const [editMode, setEditMode] = useState();

  const onChangeInput = (event) => {
    props.setUserPhoto(event.target.files[0]);
  };

  return (
    <div className={style.photo}>
      <img
        onMouseEnter={props.isOwner ? () => setEditMode(true) : null}
        onMouseLeave={props.isOwner ? () => setEditMode(false) : null}
        src={props.profileFoto || avatar}
        alt="user-avatar"
      />
      {editMode && (
        <IconButton
          color="secondary"
          className={style.btn}
          component="label"
          onMouseEnter={() => setEditMode(true)}
          onMouseLeave={() => setEditMode(false)}
        >
          <AddAPhotoIcon />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={onChangeInput}
          />
        </IconButton>
      )}
    </div>
  );
};

export default Avatar;
