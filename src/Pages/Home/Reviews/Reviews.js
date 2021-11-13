import React from "react";
import ReviewCard from "../../../Components/ReviewCard/ReviewCard";
import useReviews from "../../../Hooks/useReviews";

const Reviews = () => {
  const [reviews] = useReviews();

  return (
    <div className="container">
    <h2 className="text-uppercase">Our Customers Valuable Feedback</h2>
    <div className="row text-start">
      {
        reviews.map(review => <ReviewCard
        key={review._id}
        allReview={review}
        ></ReviewCard>)
      }
      </div>
    </div>
  );
};

export default Reviews;
