import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "../../redux/users-reducer";
import { Users } from "./Users";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  componentDidMount() {
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        isFetching={this.props.isFetching}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    togleIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
