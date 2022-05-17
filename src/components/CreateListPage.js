import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewList(props) {
  const [newForm, setNewForm] = useState({
    image: "",
    description: "",
    city: "",
    state: "",
    location: "",
    scareRating: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createNewList(newForm);
    setNewForm({
      image: "",
      description: "",
      city: "",
      state: "",
      location: "",
      scareRating: "",
    });
  };

  const loaded = () => {
    return props.NewList.map((list) => (
      <div key={list._id} className="list">
        <Link to={`/NewList/${list._id}`}>
          <img src={list.image} alt={list.name} />
        </Link>
        <h1>{list.description}</h1>
        <h3>{list.city}</h3>
        <h3>{list.state}</h3>
        <h3>{list.location}</h3>
        <h3>{list.scareRating}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="enter an image URL..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Enter a description..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.city}
          name="city"
          placeholder="Which city?..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.state}
          name="state"
          placeholder="Which state?..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.location}
          name="title"
          placeholder="Which location?..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.scareRating}
          name="scareRating"
          placeholder="On a scale of 1-5, how scary is this place?"
          onChange={handleChange}
        />
        <input type="submit" value="Create list" />
      </form>
      {props.NewList ? loaded() : loading()}
    </section>
  );
}

export default NewList;
