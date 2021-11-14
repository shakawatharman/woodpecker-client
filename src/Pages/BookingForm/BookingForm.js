import React, { useRef } from 'react';
import SpecialButton from '../../Components/SpecialButton/SpecialButton';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';

const BookingForm = ({productId}) => {
    const [myProducts] = useProducts()

    const productName = myProducts.filter(product=>product._id==productId).map(product=>product.title);
    const productPrice = myProducts.filter(product=>product._id==productId).map(product=>product.price);

    const {user} = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();
    const priceRef = useRef();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const product = productRef.current.value;
        const price = priceRef.current.value;

       const order = {
        name,email,product,price,status:'PENDING'
        }

        console.log(order)

        fetch("https://woodpecker-a3360.web.app/orders",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order successfully added')
                e.target.reset();
            }
        })
        
    }
    return (
        <div className="theme-bg p-1 my-5">
        <form onSubmit={handleSubmit} className="event-form" action="#">
            <div className="row bg-white rounded p-4">
                <div className="mb-3">
                    <label htmlFor="title">Your Name</label>
                    <input ref={nameRef} type="text" id="title"  value={user?.displayName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailRef} type="email" id="email" value={user?.email}/>
                </div>
               
                <div className="mb-3">
                    <label htmlFor="address">Your Product</label>
                    <input ref={productRef} type="text" id="address" value={productName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Product Price</label>
                    <input ref={priceRef} type="text" id="address" value={productPrice} />
                </div>
                <div className="mb-3">

                    <SpecialButton type="submit">Place Order</SpecialButton>
                    
                    
                </div>
            </div>
        </form>
    </div>
    );
};

export default BookingForm;