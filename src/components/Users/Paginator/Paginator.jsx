import React from "react";
import { Pagination } from "@material-ui/lab";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let onPageChanged = (event, page) => {
    props.onPageChanged(page);
  };

  return (
    <div className="pageCount">
      <p>total users: {props.totalUsersCount}</p>
      <p>total pages: {pagesCount}</p>
      <Pagination
        count={pagesCount}
        page={props.currentPage}
        onChange={onPageChanged}
      />
    </div>
  );
};

export default Paginator;
