import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./Styles";
import { Provider } from "react-redux";
import store from "./Store/store.js";

const token = localStorage.getItem("token");

store.dispatch({
  type: "TOKEN",
  payload: token,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
