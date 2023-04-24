import React from "react";
import Logo from "./Logo";
import CartButton from "../UI/CartButton";

const Navbar = props => {
    return (
        <nav className="fixed top-0 bg-emerald-500 w-full z-10">
            <div className="flex flex-wrap w-11/12 max-w-screen-xl mx-auto">
                <Logo name="Pizzolino" />
                <CartButton />
            </div>
        </nav>
    )
};

export default Navbar;
