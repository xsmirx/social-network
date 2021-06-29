import React from "react";
import { CircularProgress } from "@material-ui/core";
import style from "./Preloader.module.css";

export const Preloader = (props) => {
  return (
    <div className={style.block}>
      <CircularProgress />
    </div>
  );
};
