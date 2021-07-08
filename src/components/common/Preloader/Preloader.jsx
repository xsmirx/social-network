import React from "react";
import { CircularProgress } from "@material-ui/core";
import style from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={style.block}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
