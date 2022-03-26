import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    const addToCartHandler = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);

    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCartHandler={addToCartHandler}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                {
                    cart.map((item) => (
                        <div className='selected-cart'>
                            <div className='img'>
                                <img src={item.picture} alt="" />
                            </div>
                            <div>
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;