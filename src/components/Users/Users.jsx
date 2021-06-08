import React from "react";
import { User } from "./User/User";
import style from "./Users.module.css";
import * as axios from "axios";

export class Users extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= 20; i++) {
      pages.push(i);
    }

    let pagesNumber = pages.map((p) => {
      return (
        <span
          className={
            this.props.currentPage === p ? style.selectedNumber : style.number
          }
          onClick={(e) => this.onPageChanged(p)}
        >
          {p}
        </span>
      );
    });
    let users = this.props.users.map((u) => {
      return (
        <User
          key={u.id}
          id={u.id}
          followed={u.followed}
          avatarUrl={u.photos.small}
          fullName={u.name}
          status={u.status}
          location={u.location}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      );
    });

    return (
      <div className={style.users}>
        <div className="pageCount">
          <p>total users: {this.props.totalUsersCount}</p>
          <p>total pages: {pagesCount}</p>
          {pagesNumber}
        </div>
        {users}
        <div className="pageCount">
          <p>total users: {this.props.totalUsersCount}</p>
          <p>total pages: {pagesCount}</p>
          {pagesNumber}
        </div>
      </div>
    );
  }
}
