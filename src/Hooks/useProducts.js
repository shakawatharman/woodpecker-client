import  { useEffect, useState } from 'react';

const useProducts = () => {

    
    const [myProducts, setMyProducts] = useState([])
  

    useEffect(()=> {
        fetch('https://secure-shore-57866.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setMyProducts(data))
    },[])

    return [
        myProducts
    ];
};

export default useProducts;