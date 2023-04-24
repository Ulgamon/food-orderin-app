import React from "react";
import Logo from "./Logo";
import CartButton from "../UI/CartButton";

const Navbar = props => {
    return (
        <nav className="fixed top-0 bg-emerald-500 w-full z-10">
            <div className="md:container flex flex-wrap w-full mx-auto">
                <Logo name="Pizzolino" />
                <CartButton />
            </div>
        </nav>
    )
};

export default Navbar;
