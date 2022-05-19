import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';
// import {} from 'fontawesome/free-brands-svg-icons';

function Search() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (!city) {
      setSearch();
      return;
    }
    const getSearch = async () => {
      const res = await axios.get(
        `https://haunted-site-app.herokuapp.com/locations/search?query=${city}`
      );
      setSearch(res.data);
    };
    getSearch();
  }, [city]);

  return (
    <>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter location"
      />
      <FontAwesomeIcon icon={faMagnifyingGlassLocation}></FontAwesomeIcon>
      {search &&
        search.map((result) => (
          <Link to={`/location/${result._id}`} key={result._id}>
            {result.location}
          </Link>
        ))}
    </>
  );
}

export default Search;
