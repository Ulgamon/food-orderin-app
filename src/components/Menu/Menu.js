import React, { useState } from "react";

const Menu = () => {

    const [menu, setMenu] = useState('');

    return (
        <>
            <MenuList />
        </>
    )
}

export default Menu;