import React from "react";
import style from "./Paginator.module.css";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }

  let pagesNumber = pages.map((p) => {
    return (
      <span
        key={p}
        className={
          props.currentPage === p ? style.selectedNumber : style.number
        }
        onClick={(e) => props.onPageChanged(p)}
      >
        {p}
      </span>
    );
  });

  return (
    <div className="pageCount">
      <p>total users: {props.totalUsersCount}</p>
      <p>total pages: {pagesCount}</p>
      {pagesNumber}
    </div>
  );
};

export default Paginator;
