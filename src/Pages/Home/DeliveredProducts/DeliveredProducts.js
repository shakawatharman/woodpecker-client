import React from "react";
import { Card } from "react-bootstrap";
import "./DeliveredProducts.css";

const DeliveredProducts = () => {
  return (
    <div className="my-5">
      <h1 className="text-center mb-1">Some Of Our Delivered Products</h1>
      <p className="text-center mb-5">
        We delivered successfully hundred and more products so far. Here you can
        see some of our work.
      </p>

      <div className="container">
        <div className="row card-image">

            
          <Card className="p-0 col-md-6">
            <Card.Img src="https://static-01.daraz.com.bd/p/056aee70bc05052467bc2bb13aa03411.jpg" />
          </Card>
          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.etsystatic.com/20811748/r/il/1fde44/2508674329/il_570xN.2508674329_2lsp.jpg" />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img src="https://i.pinimg.com/736x/6e/1b/b3/6e1bb3fddb76942d6003147b7884a6af--laser-cut-wood-laser-cutting.jpg" />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://cdn.shopify.com/s/files/1/0416/0130/2695/products/50-off-15pcs-set-of-square-plates-cash-on-delivery-free-shipping-455583_grande.jpg?v=1595223809"
              alt="Card image"
            />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://www.chwoodcrafts.com/portfolio/custom-boxes/ch-woodcraft-custom-boxes-2/"
              alt="Card image"
            />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img src="https://static-01.daraz.com.bd/p/07514beb974953b22a9de53a38d0b671.jpg" />
          </Card>

          <Card className="p-0 col-md-6">
            <Card.Img src="https://ae01.alicdn.com/kf/HTB1U4rLNFXXXXaZXpXXq6xXFXXXE/Pastoral-Style-10-Wooden-Photo-Frame-Classic-Creative-Design-Natural-Wood-Craft-Home-Table-Decor-Birthday.jpg" />
          </Card>
          <Card className="p-0 col-md-6">
            <Card.Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7NYqkcD91MY3jzHcWiyOs4_eraonLImf1wSF5RrtKPhCnO0AHQ897OCyb4-F8MiANFc&usqp=CAU"
              alt="Card image"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeliveredProducts;
