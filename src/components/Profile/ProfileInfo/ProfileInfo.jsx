import Reacr from "react";
import style from "./ProfileInfo.module.css";

export const ProfileInfo = (props) => {
  return (
    <div className={style.profileinfo}>
      <img
        src="https://image.freepik.com/free-vector/rainbow-coloured-abstract-low-poly-banner-design_1048-12818.jpg"
        className={style.profileinfo__background}
      />
      <div className={style.profileinfo__description}>
        <img src="./avatar.jpg" alt="" />
        <div className={style.profileinfo__about}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};
