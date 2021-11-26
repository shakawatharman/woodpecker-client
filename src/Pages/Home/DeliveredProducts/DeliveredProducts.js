import React from "react";
import { Card } from "react-bootstrap";
import "./DeliveredProducts.css";

const DeliveredProducts = () => {
  return (
    <div className="my-5 container">
      <h2 className="text-center mb-1 text-uppercase">Some Of Our Delivered Products</h2>
      <p className="text-center mb-5">
        We delivered successfully hundred and more products so far. Here you can
        see some of our work.
      </p>

      <div className="container">
        <div className="row card-image">
          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.ibb.co/ZGk4vNm/Home-Furniture-Espresso-Open-Design-Wood-Office-Wall-Ladder-Bookcase-Shelf-for-Living-Office-Room.jpg" />
          </Card>
          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.ibb.co/wRQ9tBH/68243-1649331.webp" />
          </Card>
          

          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.ibb.co/N2sZk3Z/2-Wooden-Glasses-collection-square-banner-image-fb5e1e53-5cc2-493a-8710-9ec0931b8715-1600x.jpg" />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://i.ibb.co/7Wmg9Tf/IMG-8557.jpg"
              alt="Card image"
            />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://i.ibb.co/4KpYvyW/DSC7046-01-grande.jpg"
              alt="Card image"
            />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.ibb.co/26hH4Qf/14-rostok-toys-wooden-tractor-with-animals-750x550.jpg" />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.ibb.co/X4VXCgB/5730335d9d895-5730334c4ae37-640844679.jpg" />
          </Card>
          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://i.ibb.co/WsFCpxT/5324c7b055d20c74222a921926a8b1b2.jpg"
              alt="Card image"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveredProducts;
