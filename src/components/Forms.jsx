import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../style/forms.css";

const Forms = ({ onReviewSubmit, onCancel, onUpdateReviews }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const Star = ({ isSelected, onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isSelected ? "yellow" : "none"}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const reviewValidationSchema = Yup.object({
    headline: Yup.string()
      .min(2, "Headline must be at least 2 characters")
      .required("Please enter your headline"),
    review: Yup.string()
      .min(15, "Review must be at least 15 characters")
      .required("Please enter your written review"),
  });

  const reviewInitialValues = {
    headline: "",
    review: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with rating:", rating);
    console.log("Review Data:", values);
    onReviewSubmit(values);
  };

  return (
    <div className="forms-container">
      <h2>Overall Rating</h2>
      <div className="stars-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            isSelected={star <= rating}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
      {rating === 0 && (
        <div className="error-message">Please select a rating.</div>
      )}
      <div className="review-form-container">
        <Formik
          initialValues={reviewInitialValues}
          validationSchema={reviewValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="review-form">
            <div className="for-headline">
              <label htmlFor="headline">Headline</label>
              <Field
                type="text"
                id="headline"
                name="headline"
                placeholder="What’s most important to know?"
                className="headline-input"
              />
              <ErrorMessage
                name="headline"
                component="div"
                className="error-message"
                style={{ paddingTop: "20px" }}
              />
            </div>

            <div>
              <label htmlFor="review">Written Review</label>
              <Field
                as="input"
                id="review"
                name="review"
                placeholder="What did you like or dislike? What did you use this product for?"
                className="review"
              />
              <ErrorMessage
                name="review"
                component="div"
                className="error-message"
                style={{ paddingTop: "20px" }}
              />
            </div>

            <div className="forms-btn">
              <button className="cancel-button" onClick={onCancel}>
                cancel
              </button>
              <button type="submit" className="submit-button">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Forms;
