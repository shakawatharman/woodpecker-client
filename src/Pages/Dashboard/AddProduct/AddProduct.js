import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SpecialButton from '../../../Components/SpecialButton/SpecialButton';
import './AddProduct.css';

const AddProduct = () => {
    const titleRef = useRef()
    const descRef = useRef()
    const imgRef = useRef()
    const priceRef = useRef()
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const title = titleRef.current.value;
        const desc = descRef.current.value;
        const img = imgRef.current.value;
        const price = priceRef.current.value;

       const product = {
            title,desc,img,price
        }
        console.log(product);

        fetch("https://secure-shore-57866.herokuapp.com/products",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Event successfully added')
                e.target.reset();
            }
        })
        
    }
    return (
        <>
           <div className="container row my-5">
                <div className="col-md-4">
                <img className="w-100" src="https://t3.ftcdn.net/jpg/01/52/72/80/360_F_152728021_uUCcnhwVt8F2uy4lcC5llRa1U6bbP3KA.jpg" alt="" />
                </div>
               
                <div className="col-md-8 my-5">
                        <form onSubmit={handleSubmit} className="event-form" action="#">
                        <div className="row bg-white rounded p-4">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="title">Add Product</label>
                                <input ref={titleRef} type="text" id="title" placeholder="Enter title" />
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <label htmlFor="textarea">Description</label>
                                <textarea ref={descRef} placeholder="Enter description" id="textarea"></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="date">Price</label>
                                <input ref={priceRef} type="number" id="price" placeholder="Add Price" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="upload">Add Image URL</label>
                               
                                <input ref={imgRef} type="text" id="upload" placeholder="Add Valid Image URL" />
                                    
                            </div>
                        </div>
                        <SpecialButton className="w-100" type="submit">Add</SpecialButton>
                        <Link to="/">Back to "Home"</Link>
                    </form>
                </div>
           </div>
        </>
    );
};

export default AddProduct;