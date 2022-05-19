import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./pages/Main";
import Search from "./pages/Search";
import ShowPage from "./pages/ShowPage";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route index element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/location/:id" element={<ShowPage />} />
      </Route>
    </Routes>
  </Router>
);
