import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const MenuItem = props => {

    const [ currentPrice, setCurrentPrice ] = useState(props.pizza.m);
    const [ activeButton, setActiveButton ] = useState('m');
    const [ amount, setAmount ] = useState(1);
    const [ isValid, setIsValid] = useState({valid: true, style: ''});
    const ctx = useContext(CartContext);

    const inactive = 'bg-stone-400 hover:bg-emerald-500 hover:text-red-500';
    const active = 'bg-emerald-500 text-red-500';

    const changePrice = (e) => {
        setActiveButton(e.target.value)
        if (isValid.valid) {
            setCurrentPrice(props.pizza[e.target.value] * amount);
        }
    }

    const isValidInput = (e) => {
        if(e.target.value <= 0) {
            setIsValid({ valid: false, style:"bg-red-400"});
            setAmount('');
            setCurrentPrice(0);
            return;
        }
        setIsValid({ valid: true, style:"bg-green-400"})
        setAmount(parseInt(e.target.value));
        setCurrentPrice(props.pizza[activeButton] * e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (isValid.valid) {
            ctx.orderPizza(props.pizza, activeButton, amount);
        }
    }

    return (
        <div className="flex sm:text-2xl text-xl hover:bg-stone-300 p-2 sm:p-3 rounded-lg" key={props.key}>
            <div className="text-stone-700 w-1/3 sm:w-3/4">
                <p className="text-bold">{props.pizza.name}</p>
                <p className="text-light italic text-sm sm:w-1/3">({props.pizza.ingredients})</p>
                <p className="font-semibold text-stone-600 text-base sm:text-2xl">Price:  
                    <strong className="font-semibold text-green-500 ms-0.5">{currentPrice.toFixed(2)}$</strong>
                </p>
            </div>
            <form className="ms-auto p-0 m-0" onSubmit={submitHandler}>
                <Button value="s" className={`w-12 h-12 m-0.5 rounded-lg font-semibold
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
                <div className=" w-38 h-12 m-0.5 mx-auto bg-stone-400 rounded-lg">
                    <label className="text-base vertical-align ms-5 m-3 mb-4">
                        Amount:
                        <input 
                            max="20"
                            step='1'
                            className={`w-12 h-10 m-1 px-1 rounded-lg ms-3 outline-none ${isValid.style}`} 
                            type="number" 
                            onChange={isValidInput}
                            value={amount}
                        />
                    </label>
                </div>
                <Button 
                    type="submit" 
                    className={`w-38 h-12 bg-black rounded-lg m-0.5 mx-auto 
                    bg-orange-400 text-base hover:bg-orange-500 px-4 disabled:bg-orange-300
                    disabled:text-gray-400 disabled:cursor-no-drop`}
                    disabled={!isValid.valid}
                >
                    Put in Your Orders
                </Button>
            </form>
            
        </div>
    )
}


export default MenuItem;
