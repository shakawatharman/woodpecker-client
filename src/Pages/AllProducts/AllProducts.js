import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Home/Navigation/Navigation';
import ProductCard from '../ProductCard/ProductCard';


const AllProducts = () => {

    const [myProducts] = useProducts();

    return (
        <div>
            <Navigation></Navigation>
            
           <div className="container">
           <div className="row my-5">
                {
                    myProducts.map((myProduct) =>
                        <ProductCard
                        key={myProduct._id}
                        product={myProduct}
                        ></ProductCard> 
                        )
                        
                }
                
                </div>  
           </div>

            <Footer></Footer>
        </div>
    );
};

export default AllProducts;