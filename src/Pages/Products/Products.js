import React from "react";
import { Nav, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SpecialButton from "../../Components/SpecialButton/SpecialButton";
import useAuth from "../../Hooks/useAuth";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [myProducts] = useProducts();

  const { isLoading } = useAuth();

  return (
    <div className="container">
      <h2 className="my-5 text-center text-uppercase">Buy Your Product</h2>

      {isLoading && <Spinner animation="border" variant="warning" />}

      <div className="row">
        {myProducts.map((myProduct, index) =>
          index <= 5 ? (
            <ProductCard key={myProduct._id} product={myProduct}></ProductCard>
          ) : (
            ""
          )
        )}
      </div>
      <SpecialButton > <Nav.Link as={Link} className="text-white fw-bold" to="/allproducts">
              See More
            </Nav.Link></SpecialButton>
    </div>
  );
};

export default Products;
