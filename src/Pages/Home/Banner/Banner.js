import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel className="banner-carousel">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/BBwJdk9/Woodcraft-Workshop-2-1566813693.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            
            <p>We are ready with these instruments. Are you ready to order?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/B6twbWr/Woodcraft-Workshop-1-1566813693.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
           
            <p>You will never be disappointed with our work. Visit us!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/5hSkTXj/carpentry-1200x600.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
           
            <p>
              We are determined to maintain our product quality.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
