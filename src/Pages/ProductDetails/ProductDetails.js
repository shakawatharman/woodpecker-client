import React from 'react';
import useProducts from '../../Hooks/useProducts';

const ProductDetails = ({productId}) => {

    const [ myProducts ] = useProducts();

    return (
        <div>
            
            {

                myProducts.filter(product =>product._id===productId).map(product =>
                    <>
                    <h2>{product.title}</h2>
                    <img className="img-fluid rounded shadow my-5" src={product.img} alt="" />
                    <p>{product.desc}</p>
                    </>
                    )
            }



        </div>
    );
};

export default ProductDetails;