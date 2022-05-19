import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Nav from "../components/Nav";
import Search from "../components/Search";

const Main = (props) => {
  console.log("here")
  return (
    <section className="main-page">
      <Nav />
      <Search />
      <h2>put a searchbar here or in navbar possibly</h2>
      <h1>Gigi write a paragraph lol</h1>
      <h2>not sure</h2>
      <Carousel />
    </section>
  )
}

export default Main;
