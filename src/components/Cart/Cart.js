import React from 'react';
import './Cart.css'

const Cart = ({randomChoose, removeAll,cart}) => {
    return (
        <div className='cart'>
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
    );
};

export default Cart;