import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, ListGroup, Popover, Overlay } from "react-bootstrap";

function Search() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(null);
  const ref = useRef(null);

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
    <div className="searchPG">
      <div className="searchInputDiv" ref={ref}>
        <Form.Control
          type="text"
          placeholder="Enter location..."
          size="sm"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Overlay
        show={search}
        target={ref.current}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Search Results</Popover.Header>
          <Popover.Body style={{ padding: 0 }}>
            <ListGroup variant="flush">
              {search &&
                search.map((result) => (
                  <ListGroup.Item key={result._id}>
                    <Link
                      to={`/location/${result._id}`}
                      onClick={() => {
                        setCity("");
                        setSearch(null);
                      }}
                    >
                      {result.location}
                    </Link>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default Search;
