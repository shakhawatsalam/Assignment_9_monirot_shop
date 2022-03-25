import React, { useEffect, useState } from 'react';
import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>this is for product: {products.length} </h2>
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;