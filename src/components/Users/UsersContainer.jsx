import React from "react";
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "../../redux/users-reducer";
import { Users } from "./Users";

class UsersContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <Users
        isAuth={this.props.isAuth}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        isFetching={this.props.isFetching}
        isFollowProgress={this.props.isFollowProgress}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowProgress: state.usersPage.isFollowProgress,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
