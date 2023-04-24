import React, { useState } from "react";
import Button from "../UI/Button";

const MenuItem = props => {

    const [ currentPrice, setCurrentPrice ] = useState(props.pizza.m);
    const [ activeButton, setActiveButton ] = useState('m');
    const [ amount, setAmount ] = useState('');

    const inactive = 'bg-stone-400 hover:bg-emerald-500 hover:text-red-500';
    const active = 'bg-emerald-500 text-red-500';

    const changePrice = (e) => {
        setActiveButton(e.target.value)
        setCurrentPrice(props.pizza[e.target.value])
    }

    return (
        <div className="flex sm:text-2xl text-xl hover:bg-stone-300 p-3 rounded-lg" key={props.key}>
            <div className="text-stone-700 w-1/2 sm:w-3/4">
                <p className="text-bold">{props.pizza.name}</p>
                <p className="text-light italic text-sm sm:w-1/3">({props.pizza.ingredients})</p>
                <p className="font-semibold text-stone-600">Price:  
                    <strong className="font-semibold text-green-500 ms-1">{currentPrice}$</strong>
                </p>
            </div>
            <Button value="s" className={`w-12 h-12 m-0.5 ms-auto rounded-lg font-semibold
             ${"s" === activeButton ? active : inactive}`} onClick={changePrice}>
                S
            </Button>
            <Button value="m" className={`w-12 h-12 m-0.5 rounded-lg font-semibold
             ${"m" === activeButton ? active : inactive}`} onClick={changePrice}>
                M
            </Button>
            <Button value="l" className={`w-12 h-12 m-0.5 rounded-lg font-semibold
             ${"l" === activeButton ? active : inactive}`} onClick={changePrice}>
                L
            </Button>
        </div>
    )
}


export default MenuItem;