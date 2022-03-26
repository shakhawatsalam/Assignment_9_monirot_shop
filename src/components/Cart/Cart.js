import React from 'react';
import './Cart.css'

const Cart = ({ randomChoose, removeAll, cart }) => {
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
            <div className='btn'>

                <button onClick={removeAll} className='remove-all'>Remove All</button>
                <button onClick={randomChoose} className='random-choose'>Random Choose</button>
            </div>
        </div>
    );
};

export default Cart;