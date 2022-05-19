import "./styles.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import Main from "./pages/Main";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/location/:id" element={<ShowPage />} />
      </Route>
    </Routes>
  );
}
export default App;
