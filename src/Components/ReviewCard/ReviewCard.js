import React from "react";
import { VscStarFull } from "react-icons/vsc";

const ReviewCard = ({ allReview }) => {
  const { name, customerReview, rating } = allReview;
  return (
   <>
     <div className="col-md-4 my-5 border-end">
      <h5 className="fw-bold text-primary">{name}</h5>
      <p>{customerReview}</p>

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
