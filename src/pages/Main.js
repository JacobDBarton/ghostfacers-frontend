import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Search from "../components/Search";
// import { Link } from 'react-router-dom';

const Main = (props) => {
  console.log("here")
  return (
    <section className="main-page">
      <Nav />
      <Search />
      <h2>Here at Ghostfacers, you can get details of America's most Haunted locations! Search cities to find the lingering spirits that roam around hotels, prisons, asylums, or abandoned buildings. If you've been there please tell us about your experience! </h2>
      <Carousel />
    </section>
  )
}

export default Main;
