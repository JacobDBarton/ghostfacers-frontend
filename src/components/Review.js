import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Review(props) {
  const [review, setReview] = useState({
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
        setReview(res.data);
        setHasReview(true);
      }
    };
    getReview();
  }, [props.locationId]);

  const handleCommentChange = (event) => {

    const newReviewObj = {comment: event.target.value, hauntedRating: review.hauntedRating};
    setReview(newReviewObj)
  }

  const handleReviewChange = (event) => {

    const newReviewObj = {comment: review.comment, hauntedRating: event.target.value};
    setReview(newReviewObj)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const postReview = async () => {
      await axios.post(
        `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`,
        review
      );
      setEditing(false);
      setHasReview(true);
    };
    postReview();
  };

  const handleDelete = async () => {
    await axios.delete(
      `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`
    );
    setHasReview(false)
    setReview({comment: '', hauntedRating: 0})
  };

  if (!hasReview && !editing) {
    return (
      <div>
        <h2>Have you visited? Had a supernatural experience? </h2>
        <button onClick={() => setEditing(true)}>Add Review</button>
      </div>
    );
  } else if (editing) {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={review.comment}
            name="description"
            placeholder="Enter a comment..."
            onChange={handleCommentChange}
          />
          <input
            type="number"
            min={1}
            max={5}
            value={review.hauntedRating}
            name="hauntedRating"
            placeholder="On a scale of 1-5, how scary is this place?"
            onChange={handleReviewChange}
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
        <button onClick={() => handleDelete()}>Delete Review</button>
      </div>
    );
  }
}

export default Review;
