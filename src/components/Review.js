import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

/**
 * Renders when there are no reviews for a location. Gives user the
 * option to add a review.
 */
const NoReviews = (props) => (
  <div>
    <h2 className="text-light">
      Have you visited? Had a supernatural experience?
    </h2>
    <Button variant="warning" onClick={props.onAddReview}>
      Add Review
    </Button>
  </div>
);

/**
 * Form for adding/editing a review.
 */
const ReviewForm = (props) => (
  <section className="d-flex justify-content-center">
    <Form className="w-25 text-light" onSubmit={props.onSubmit}>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter a comment..."
          value={props.review.comment}
          onChange={props.onCommentChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>On a scale of 1-5, how scary is this place?</Form.Label>
        <Form.Control
          type="number"
          min={1}
          max={5}
          name="hauntedRating"
          placeholder="Leave your review..."
          value={props.review.hauntedRating}
          onChange={props.onHauntedRatingChange}
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Create Review
      </Button>
    </Form>
  </section>
);

/**
 * Renders a review, including the comment and ghost emojis for the haunted rating.
 * Allows the user to edit or delete the review.
 */
const ReviewDisplay = (props) => (
  <div>
    <h2 className="text-light">{props.review.comment}</h2>
    {/* Create an array that is the same length as the hauntedRating, then map over it and render a ghost emoji for each one.
    Inspired by this stack overflow solution: https://stackoverflow.com/a/42306160 */}
    <h3 className="text-light">
      Haunted Rating:{" "}
      {Array(props.review.hauntedRating)
        .fill()
        .map((_, i) => (
          <span key={i}>👻</span>
        ))}
    </h3>
    <Button variant="warning" onClick={props.onEdit}>
      Edit Review
    </Button>{" "}
    <Button variant="warning" onClick={props.onDelete}>
      Delete Review
    </Button>
  </div>
);

/**
 * Main review component. Fetches the review for a location and renders the proper
 * component based on if a review exists or not.
 */
function Review(props) {
  const [review, setReview] = useState({
    comment: "",
    hauntedRating: 0,
  });
  const [hasReview, setHasReview] = useState(false);
  const [editing, setEditing] = useState(false);

  // go fetch the review for the current location
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

  // function that handles adding/updating a review for a location
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const postReview = async () => {
      await axios.post(
        `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`,
        review
      );
      setEditing(false);
      setReview(review);
      setHasReview(true);
    };
    postReview();
  };

  // function that handles deleting a review for a location
  const handleDelete = async () => {
    await axios.delete(
      `https://haunted-site-app.herokuapp.com/reviews/${props.locationId}`
    );
  };

  if (!hasReview && !editing) {
    return <NoReviews onAddReview={() => setEditing(true)} />;
  } else if (editing) {
    return (
      <ReviewForm
        review={review}
        onSubmit={handleSubmit}
        onCommentChange={(evt) =>
          setReview((review) => ({
            ...review,
            comment: evt.target.value,
          }))
        }
        onHauntedRatingChange={(evt) =>
          setReview((review) => ({
            ...review,
            hauntedRating: evt.target.value,
          }))
        }
      />
    );
  } else {
    return (
      <ReviewDisplay
        review={review}
        onEdit={() => setEditing(true)}
        onDelete={() => handleDelete()}
      />
    );
  }
}

export default Review;
