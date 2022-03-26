import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCartHandler = (product) => {
        const newCart = [...cart, product];
        if (newCart.length <= 4) {
            setCart(newCart);
        } else {
            alert('You can\'t buy more then 4')
        }


    }
    const randomChoose = () => {
        const random = Math.floor(Math.random() * cart.length);
        const randomCart = [cart[random]]
        console.log(random, cart[random]);
        setCart(randomCart)
    }
    const removeAll = () => {
        setCart([]);
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
                        <div key={item.id} className='selected-cart'>
                            <div className='img'>
                                <img src={item.picture} alt="" />
                            </div>
                            <div>
                                <h5>{item.name}</h5>
                            </div>
                        </div>
                    ))
                }
                <button onClick={removeAll} className='remove-all'>Remove All</button>
                <button onClick={randomChoose} className='random-choose'>Random Choose</button>
            </div>
        </div>

    );
};

export default Shop;