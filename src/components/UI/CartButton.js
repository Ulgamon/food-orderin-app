import React from "react";
import pizzaBox from "./pizzabox.svg";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const ctx = React.useContext(CartContext);


    return (
        <button 
            className="h-full relative bg-orange-400 my-2 ms-auto me-5 hover:bg-orange-500 rounded-full"
            onClick={props.toggleCartModal}
        >
            <p className="sm:inline-block hidden ms-3 text-stone-800 sm:ms-5 my-2 text-sm sm:text-lg">Your Orders</p>
            <img 
                className="inline-block w-10 sm:w-14 m-2 sm:m-0 sm:mx-1 sm:me-5" 
                src={pizzaBox} 
                alt="your orders" 
            />
            {ctx.orders.length > 0 ? 
            <div 
                className="absolute start-100 sm:left-[88%] left-[60%] -top-3 w-fit rounded-full text-sm bg-red-500 text-white p-1 px-2.5 m-1">
                {ctx.numOfOrders}
            </div> : ''}
            
        </button>
    )
}

export default CartButton;