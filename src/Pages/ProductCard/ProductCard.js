import React from 'react';
import { useHistory } from "react-router";
import { Card, CardGroup } from 'react-bootstrap';
import SpecialButton from '../../Components/SpecialButton/SpecialButton';
import './ProductCard.css';

const ProductCard = ({product}) => {

    const history = useHistory();

    const { title, desc, img, price, _id } = product;

    const handleProductDetails = ()=> {
        history.push(`/buyingProduct/${_id}`);
    };

    return (
        <>
            <div className="col-md-4">
                <CardGroup>
                    <Card className="card-container mb-3">
                        <div className="img-parent">
                            <Card.Img variant="top" src={img} />
                        </div>

                        <Card.Body>
                            <Card.Title>{title}</Card.Title>

                            <Card.Text>{desc.split('').slice(0,100).toString().replace(/,/g,'')}</Card.Text>
                            <h2>${price}</h2>
                            <SpecialButton onClick={handleProductDetails} className="w-75">Buy Now</SpecialButton>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
};

export default ProductCard;