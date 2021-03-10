import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0); // reduce method
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total += product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 0;
    }
    
    const roundedTotal = total.toFixed(2);
    const tax = (total/10).toFixed(2);
   
    const grandTotal = (Number(total) + shipping + Number(tax)).toFixed(2);
    
    return (
        <div style = {{position: "fixed"}}>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {roundedTotal}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax/VAT: {tax}</small></p>
            <p><b>Total Price: {grandTotal}</b></p>
            <br/><br/>
            <Link to="/review">
                <button className='main-button'>Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;