import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCartHandler }) => {
    const { name, id, picture, price } = product;



    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3 className='title'>{name}</h3>
            <h3>Price:{price}</h3>
            <button onClick={() => addToCartHandler(product)}
                key={id}
                className='cart-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;