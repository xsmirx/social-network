import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "normalize.css";
import "./App.css";
import { initializeApp } from "./redux/app-reducer";
import HeaderContainer from ".//components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
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
          <React.Suspense fallback={<Preloader />}>
            <Route path="/login" render={() => <LoginContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </React.Suspense>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
