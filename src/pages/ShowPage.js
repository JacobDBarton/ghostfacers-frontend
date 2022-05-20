import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap"
import axios from "axios";
import Review from "../components/Review";

function Show() {
  const [location, setLocation] = useState(null);
  const { id } = useParams();

  // get location
  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await axios.get(
          `https://haunted-site-app.herokuapp.com/locations/${id}`
        );
        setLocation(res.data);
      } catch (err) {
        // console.log("error", err);
      }
    };
    getLocation();
  }, [id]);

  // if location is falsey, return null
  if (!location) return null;

  return (
    <Container className="location">
      <h1 className="text-light">{location.location}</h1>
      <p className="text-light">{location.description}</p>
      {location.image && (
        <img
          src={location.image}
          alt={location.name}
          className="location-img"
        />
      )}
      <Review locationId={location._id} />
    </Container>
  );
}

export default Show;
