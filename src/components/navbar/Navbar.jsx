import React from "react";
import style from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={`${style.navbar} App__block`}>
      <a href="">Profile</a>
      <a href="">Message</a>
      <a href="">News</a>
      <a href="">Music</a>
    </nav>
  );
}
