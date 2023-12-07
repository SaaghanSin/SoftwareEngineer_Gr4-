import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { MyModify } from "./components/contextModify";
ReactDOM.render(
  <React.StrictMode>
    <MyModify>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MyModify>
  </React.StrictMode>,
  document.getElementById("root")
);
