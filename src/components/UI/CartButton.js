import React from "react";
import pizzaBox from "./pizzabox.svg";

const CartButton = () => {
    return (
        <button className="h-full bg-orange-500 my-2 ms-auto me-5 hover:bg-orange-600 rounded-full">
            <p className="sm:inline-block hidden ms-3 text-stone-800 sm:ms-5 text-sm sm:text-lg">Your Orders</p>
            <img className="inline-block w-10 sm:w-14 m-2 mx-3 sm:m-0 sm:mx-1 sm:me-5" src={pizzaBox} alt="your orders" />
        </button>
    )
}

export default CartButton;