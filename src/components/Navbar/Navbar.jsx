import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <NavLink to="/profile" activeClassName={style.active}>
        Profile
      </NavLink>
      <NavLink to="/dialogs" activeClassName={style.active}>
        Message
      </NavLink>
      <NavLink to="/users" activeClassName={style.active}>
        Users
      </NavLink>
      <NavLink to="/news" activeClassName={style.active}>
        News
      </NavLink>
      <NavLink to="/music" activeClassName={style.active}>
        Music
      </NavLink>
      <NavLink to="/settings" activeClassName={style.active}>
        Settings
      </NavLink>
    </nav>
  );
};
