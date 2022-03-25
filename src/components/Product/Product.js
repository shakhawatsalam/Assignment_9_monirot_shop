import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({ product }) => {
    const { name, id, picture } = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h2 className='title'>Name:{name}</h2>
            <button className='cart-btn'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;