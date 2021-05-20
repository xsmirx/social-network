import React from "react";
import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__icon}>
        <img src="./logo.png" />
      </div>
    </header>
  );
}
