import "./styles.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import App from "./components/App";
import LandingPage from "./LandingPage";
import ShowPage from "./components/ShowPage";
import Review from "./components/Review";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Review/:id" element={<ShowPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
