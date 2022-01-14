import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import {MyHeader, PageBasicLayout} from '../src/components/presentational'
import {MainPage} from "../src/pages"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        {/* <App /> */}
      <MainPage />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
