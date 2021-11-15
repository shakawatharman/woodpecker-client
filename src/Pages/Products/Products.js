import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {

    const [myProducts] = useProducts();

    const {isLoading} =useAuth();
   
    return (
        <div className="container">
            <h2 className="my-5 text-center text-uppercase">Select Your Product</h2>

            {isLoading && <Spinner animation="border" variant="warning" />}

            <div className="row">
                {
                    myProducts.map((myProduct,index) => index<=5 ?
                        <ProductCard
                        key={myProduct._id}
                        product={myProduct}
                        ></ProductCard> : "" )
                        
                }
                
                </div>            
        </div>
    );
};

export default Products;