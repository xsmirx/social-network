import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
