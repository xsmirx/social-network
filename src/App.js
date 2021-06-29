import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Navbar } from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { FriendsContainer } from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { LoginContainer } from "./components/Login/LoginContainer";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { CircularProgress } from "@material-ui/core";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <CircularProgress />;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-block Header">
            <HeaderContainer />
          </div>

          <div className="App-block Navbar">
            <Navbar />
          </div>

          <div className="App-block Sidebar">
            <FriendsContainer />
          </div>

          <div className="App-block Main">
            <Route path="/login" render={() => <LoginContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={News} />
            <Route path="/music" render={Music} />
            <Route path="/settings" render={Settings} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
