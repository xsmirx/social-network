import React from "react";
import style from "./ProfileButtons.module.css";
import { Button } from "@material-ui/core";

const ProfileButtons = ({
  isOwner,
  isFollow,
  isFetchingFollow,
  setFollow,
  setUnfollow,
  userId,
}) => {
  return (
    <>
      {isOwner ? (
        <Button fullWidth variant="contained" color="primary" >
          Change Info
        </Button>
      ) : (
        <div className={style.buttonsGroup}>
          {isFollow ? (
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => setUnfollow(userId)}
              disabled={isFetchingFollow}
            >
              unfollow
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => setFollow(userId)}
              disabled={isFetchingFollow}
            >
              Follow
            </Button>
          )}
          <Button fullWidth variant="outlined" color="primary">
            Chat
          </Button>
        </div>
      )}
    </>
  );
};

export default ProfileButtons;
