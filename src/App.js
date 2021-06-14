import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
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
import { Login } from "./components/Login/Login";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

export const App = () => {
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
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};
