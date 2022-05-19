import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
// import Search from "../components/Search";

const Main = (props) => {
  console.log("here");
  return (
    <section className="main-page">
      <Nav />
      <Outlet />
    </section>
  );
};

export default Main;
