import React, { useRef } from "react";
import SpecialButton from "../../Components/SpecialButton/SpecialButton";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Home/Navigation/Navigation";

const AddReview = () => {
  const { user } = useAuth();

  // const [products] = useProducts();

  const nameRef = useRef();
  const emailRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const customerReview = reviewRef.current.value;
    const rating = ratingRef.current.value;

    const Review = {
      name,
      email,
      customerReview,
      rating,
      status: "PENDING",
    };
    

    fetch("https://secure-shore-57866.herokuapp.com/reviews",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(Review)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        alert('Thanks for your valuable review.')
        e.target.reset();
      }
    })
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="container row my-5">
        <div className="col-md-6">
          <form className="event-form" action="#">
            <div className="row bg-white rounded p-4">
              <div className="mb-3">
                
                <input
                  ref={nameRef}
                  type="text"
                  id="title"
                  placeholder="Enter Name"
                  value={user?.displayName}
                />
              </div>
              <div className="mb-3">
               
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={user?.email}
                />
              </div>

              <div className="mb-3">
               
                <textarea
                  className=""
                  type="text"
                  ref={reviewRef}
                  id="experience"
                  placeholder="Write Your Experience"
                />
              </div>
              <div className="mb-3">
                <input
                 ref={ratingRef}
                 type="number"
                 id="reviewNumber"
                 placeholder="Rate Us Out Of 5"
                />
              </div>

              <div className="mb-3">
                <SpecialButton
                  onClick={handleSubmit}
                  className="w-100"
                  type="submit"
                >
                  Submit
                </SpecialButton>
                
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img
            className="w-100"
            src="https://blog.hubspot.com/hubfs/Respond-Google-Reviews.jpg"
            alt=""
          />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default AddReview;
