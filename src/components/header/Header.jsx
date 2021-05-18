import React from "react";
import style from "./header.module.css";

export function Header() {
  return (
    <header className={`${style.header} App__block`}>
      <div className={style.header__icon}>
        <img src="./logo.png" />
      </div>
    </header>
  );
}
