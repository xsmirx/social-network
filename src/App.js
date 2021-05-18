import logo from "./logo.svg";
import "normalize.css";
import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}