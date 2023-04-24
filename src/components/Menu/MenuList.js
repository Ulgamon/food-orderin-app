import React from "react";
import MenuItem from "./MenuItem";

const MenuList = props => {
    return (
        <ul className="w-full">
            {props.menu.map(el =>
                <li key={el.name}>
                    <MenuItem pizza={el} />
                    <hr className="bg-stone-800 w-full h-0.5 mx-auto my-2" />
                </li>
            )}
        </ul>
    )
}

export default MenuList;