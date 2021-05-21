import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { DialogName } from "./components/Dialogs/DialogName/DialogName";
import { Messege } from "./components/Dialogs/Messege/Messege";

let dialogs = [
  { id: 1, name: "Inna" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Nastya" },
  { id: 4, name: "Lena" },
  { id: 5, name: "Tasya" },
];
let messeges = [
  { id: 1, messege: "Hi" },
  { id: 2, messege: "How are you?" },
  { id: 3, messege: "Bla bla bla" },
];
let posts = [
  { id: 1, messege: "Lorem", likesCount: 12 },
  {
    id: 2,
    messege: "Hello, best of the best social network!",
    likesCount: 87,
  },
  { id: 3, messege: "wow!", likesCount: 4 },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messeges={messeges} posts={posts} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
