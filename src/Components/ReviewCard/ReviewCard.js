import React from "react";
import { VscStarFull } from "react-icons/vsc";
// import Rating from "react-rating";

const ReviewCard = ({ allReview }) => {
  const { name, customerReview, rating } = allReview;
  return (
   <>
     <div className="col-md-4 my-5 border-end">
      <h5 className="fw-bold text-primary">{name}</h5>
      <p>{customerReview}</p>

      {/* <div className="reviews">
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly
          ></Rating>
        </div> */}

      {rating == 5 && (
        <>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
        </>
      )}
      {rating == 4 && (
        <>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
        </>
      )}
      {rating == 3 && (
        <>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
        </>
      )}
      {rating == 2 && (
        <>
          <VscStarFull className="text-warning"> </VscStarFull>
          <VscStarFull className="text-warning"> </VscStarFull>
        </>
      )}
      {rating == 1 && (
        <>
          <VscStarFull className="text-warning"> </VscStarFull>
        </>
      )}
    </div>
   </>
  );
};

export default ReviewCard;
