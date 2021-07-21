import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import style from "./Header.module.css";
import logo from "./../../logo.png";

export function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.header__icon}>
        <NavLink to="/profile">
          <img src={logo} alt="logo" />
        </NavLink>
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
