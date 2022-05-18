import "./styles.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//Pages
import Main from "./pages/Main";
import ShowPage from "./pages/ShowPage";
// import Review from ".pages/Review";
// import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main url={URL} />} />
        <Route path="/ShowPage" element={<ShowPage />} />
        {/* <Route path="/Review" element={<Review />} /> */}
        {/* <Route path="/Search" element={<Search />} /> */}
      </Routes>
    </div>
);
}
export default App;