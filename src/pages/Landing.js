import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";

const Landing = () => {
  const [featured, setFeatured] = useState();
  useEffect(() => {
    const getFeatured = async () => {
      const res = await axios.get(
        "https://haunted-site-app.herokuapp.com/locations/featured"
      );
      setFeatured(res.data);
    };
    getFeatured();
  }, []);
  return (
    <>
      <h2>
        Here at Ghostfacers, you can get details of America's most Haunted
        locations! Search cities to find the lingering spirits that roam around
        hotels, prisons, asylums, or abandoned buildings. If you've been there
        please tell us about your experience!{" "}
      </h2>
      <Carousel locations={featured} />
    </>
  );
};

export default Landing;
