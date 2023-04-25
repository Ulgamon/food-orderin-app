import React from "react";
import CartContext from "../../store/cart-context";

const CartItem = props => {
    const ctx = React.useContext(CartContext);

    const handleRemove = () => {
        ctx.removeOne(props.order.pizza.name, props.order.size);
    }

    const handleAdd = () => {
        ctx.addOne(props.order.pizza.name, props.order.size);
    }

    return (
        <div 
            className="w-11/12 p-2 flex flex-wrap justify-between hover:bg-stone-300 rounded-xl"
        >
            <div className="w-1/2">
                <p className="m-1">{props.order.pizza.name}</p>
                <p className="inline-block m-1 text-green-500">{props.order.pizza[props.order.size]}$</p>
                <p className="inline-block m-1">x{props.order.amount}</p>
                <p className="m-1">Size: {props.order.size.toUpperCase()}</p>
            </div>
            <div>
                <button 
                    className={`h-12 w-12 min-w-12 m-1 bg-stone-400 rounded-xl 
                    pb-2 text-4xl inline hover:bg-red-400`}
                    onClick={handleRemove}
                >
                    -
                </button>
                <button 
                    className={`h-12 w-12 m-1 bg-stone-400 rounded-xl
                    pb-2 text-4xl inline hover:bg-green-400`}
                    onClick={handleAdd}
                >
                    +
                </button>
            </div>
            <hr className="bg-stone-800 w-full h-0.5 border-0"/>
        </div>
    )
}

export default CartItem;