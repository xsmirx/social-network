import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.header__icon}>
        <img src="./logo.png" alt="logo" />
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <>
            {props.login}{" "}
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={props.logout}
            >
              logout
            </Button>
          </>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
}
