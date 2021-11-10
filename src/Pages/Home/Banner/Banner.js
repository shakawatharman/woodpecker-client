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
            src="https://localture.com/images/experience/417/Woodcraft-Workshop_2_1566813693.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>We are ready</h2>
            <p>We are ready with these instruments. Are you ready to order?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://localture.com/images/experience/417/Woodcraft-Workshop_1_1566813693.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h2>We are passionate</h2>
            <p>You will never be disappointed with our work. Visit us!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://www.ramelson.com/wp-content/uploads/2020/04/banner-2020-04-03T145536.789.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h2>We maintain quality</h2>
            <p>
              We are determined to maintain our product quality. Trust us!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
