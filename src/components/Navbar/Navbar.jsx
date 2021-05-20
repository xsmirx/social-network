import React from "react";
import style from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <a href="/profile">Profile</a>
      <a href="/dialogs">Message</a>
      <a href="/news">News</a>
      <a href="/music">Music</a>
      <a href="/settings">Settings</a>
    </nav>
  );
};
