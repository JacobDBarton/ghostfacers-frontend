import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Review(props) {
  const [review, setReview] = useState({
    image: "",
    comment: "",
    hauntedRating: 0,
  });
  const [hasReview, setHasReview] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const getReview = async () => {
      const res = await axios.get(
        `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`
      );
      if (res.data) {
        setHasReview(true);
        setReview(res.data);
      }
    };
    getReview();
  }, [props.locationId]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const postReview = async () => {
      await axios.post(
        `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`,
        review
      );
      setEditing(false);
    };
    postReview();
  };

  if (!hasReview && !editing)
    return (
      <div>
        <h2>Have you visited? Had a supernatural experience?  </h2>
        <button onClick={() => setEditing(true)}>Add Review</button>
      </div>
    );

  if (editing) {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={review.comment}
            name="description"
            placeholder="Enter a comment..."
            onChange={(evt) =>
              setReview((review) => ({ ...review, comment: evt.target.value }))
            }
          />
          <input
            type="img alt"
            value={review.image}
            name="image"
            placeholder="Add an image URL..."
            onChange={(evt) =>
              setReview((review) => ({ ...review, image: evt.target.value }))
            }
          />
          <input
            type="number"
            min={1}
            max={5}
            value={review.hauntedRating}
            name="hauntedRating"
            placeholder="On a scale of 1-5, how scary is this place?"
            onChange={(evt) =>
              setReview((review) => ({
                ...review,
                hauntedRating: evt.target.value,
              }))
            }
          />
          <input type="submit" value="Create Review" />
        </form>
      </section>
    );
  } else {
    return (
      <div>
        <h2>{review.comment}</h2>
        <h3>{review.hauntedRating}</h3>
        <button onClick={() => setEditing(true)}>Edit Review</button>
      </div>
    );
  }
}

export default Review;
