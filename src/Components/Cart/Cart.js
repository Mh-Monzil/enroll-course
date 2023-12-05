import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let totalPayment = 0;
    for (let i = 0; i < cart.length; i++) {
        const newPayment = cart[i];
        totalPayment = totalPayment + newPayment.price;
    }
    return (
        <div className='cart-container'>
            <h4>Course Cart : {cart.length} </h4>
            <h5>Total Payment : {totalPayment} BDT</h5>
        </div>
    );
};

export default Cart;