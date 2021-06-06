import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
import "normalize.css";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { FriendsContainer } from "./components/Friends/FriendsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-block Header">
          <Header />
        </div>

        <div className="App-block Navbar">
          <Navbar />
        </div>

        <div className="App-block Sidebar">
          <FriendsContainer />
        </div>

        <div className="App-block Main">
          <Route exact path="/" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};
