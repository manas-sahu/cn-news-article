import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const parentElement = document.getElementById("root")!;
ReactDOM.createRoot(parentElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
