import React from "react";
import CartItem from "./CartItem";

const CartList = props => {
    return (
        <ul>
            {props.orders.map(order => 
                <li key={order.pizza.name + order.size}>
                    <CartItem order={order} />    
                </li>
            )}
        </ul>
    )
}

export default CartList;