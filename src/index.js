import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AdminPanel from "./Admin_Pannel";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

const path = window.location.pathname; // Get the current URL path

root.render(
  <BrowserRouter>
    {path === '/website-development/admin-pannel' ? <AdminPanel /> : <App />}
  </BrowserRouter>
);
