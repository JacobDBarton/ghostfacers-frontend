import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Landing from "./pages/Landing";
import ShowPage from "./pages/ShowPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}>
      <Route index element={<Landing />} />
        <Route path="/location/:id" element={<ShowPage />} />
      </Route>
    </Routes>
  </Router>
);
