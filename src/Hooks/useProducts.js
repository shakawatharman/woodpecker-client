import  { useEffect, useState } from 'react';

const useProducts = () => {

    
    const [myProducts, setMyProducts] = useState([])
  

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setMyProducts(data))
    },[])

    return [
        myProducts
    ];
};

export default useProducts;