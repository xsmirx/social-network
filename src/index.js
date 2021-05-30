import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App
          state={state} //for Friends and Dialogs -> dialogsName only
          // store={store}
        />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(() => {
  renderEntireTree(store.getState());
});

renderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
