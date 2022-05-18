import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Review(props) {
  const [newReview, setNewReview] = useState({
    comment: "",
    scareRating: "",
  });

  const handleChange = (event) => {
    setNewReview({ ...newReview, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createReview(newReview);
    setNewReview({
      comment: "",
      scareRating: "",
    });
  };

  const loaded = () => {
    return props.Review.map((list) => (
      <div key={list._id} className="list">
        {/* <Link to={`/Review/${list._id}`}>
          <img src={list.image} alt={list.name} />
        </Link> */}
        <h2>{list.comment}</h2>
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
          value={newReview.comment}
          name="description"
          placeholder="Enter a comment..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newReview.scareRating}
          name="scareRating"
          placeholder="On a scale of 1-5, how scary is this place?"
          onChange={handleChange}
        />
        <input type="submit" value="Create Review" />
      </form>
      {props.Review ? loaded() : loading()}
    </section>
  );
}

export default Review;
