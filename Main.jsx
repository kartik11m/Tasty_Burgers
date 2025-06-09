import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css";
import App from "./src/App.jsx";
import {Provider} from "react-redux";
import Store from "./src/redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={Store}>
      <App/>
    </Provider>
  </div>
);

