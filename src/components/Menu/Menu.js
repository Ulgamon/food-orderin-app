import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import MenuList from "./MenuList";
import MoonLoader from "react-spinners/MoonLoader";

const Menu = (props) => {

    const ctx = useContext(CartContext);

    let content = <p>Found No Menu Items.</p>

    if (ctx.options.length > 0) {
        content = <MenuList menu={ctx.options} />
    }
    if (ctx.error) {
        content = <p>{ctx.error}</p>
    }
    if (ctx.isLoading) {
        content = <MoonLoader className="mx-auto" color="#36d7b7" />
    }

    return (
        <div className="w-full text-black">
            {content}
        </div>
    )
}

export default Menu;