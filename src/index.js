import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CreateListPage from "./components/CreateListPage";
import ShowPage from "./components/ShowPage";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<CreateListPage />} />
          <Route path="/list/:id" element={<ShowPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
