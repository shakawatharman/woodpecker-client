import React from 'react';
import { useParams } from "react-router";
import BookingForm from '../BookingForm/BookingForm';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import ProductDetails from '../ProductDetails/ProductDetails';

const SingleProduct = () => {

    const { productID } = useParams();

    return (
        <div>
           <Navigation></Navigation>

           <div className="container py-5">
                <div className="row">
                    <div className="col-md-8">
                        <ProductDetails
                        productId={productID}
                        ></ProductDetails>
                    </div>
                    <div className="col-md-4">
                        <BookingForm
                        productId={productID}
                        ></BookingForm>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SingleProduct;