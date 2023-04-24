import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import MenuList from "./MenuList";

const Menu = (props) => {

    const ctx = useContext(CartContext);

    return (
        <div className="w-full text-black">
            <MenuList menu={ctx.options} />
        </div>
    )
}

export default Menu;