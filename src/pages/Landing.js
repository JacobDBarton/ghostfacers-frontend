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
    <div className="paragraph">
      <p>
        Places that are haunted are usually believed to be associated with some
        occurrence or emotion in the ghost's past; they are often a former home
        or the place where he or she died. Aside from actual ghostly
        apparitions, traditional signs of haunting range from strange noises,
        lights, odors or breezes to the displacement of objects, bells that ring
        spontaneously or musical instruments that seem to play on their own.
        {/* https://www.history.com/topics/halloween/historical-ghost-stories */}
      </p>
      <p>
        Here at Ghostfacers, you can get details of America's most Haunted
        locations! Search cities to find the lingering spirits that roam around
        hotels, prisons, asylums, or abandoned buildings. If you've been there
        please tell us about your experience!{" "}
      </p>
      <p className="Top-title">Top 9 Haunted Locations</p>
      <Carousel locations={featured} />
    </div>
  );
};

export default Landing;
