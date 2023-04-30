import React from "react";
import ReactDOM from "react-dom";
import CartContext from "../../../store/cart-context";
import CartList from "../../Cart/CartList";
import OrderForm from "./OrderForm";

const Backdrop = props => {
    return (
        <div 
            className="fixed w-screen top-0 h-screen bg-black opacity-40 z-10"
            onClick={props.toggleCartModal}
        >
        </div>
    )
}

const ModalOverlay = props => {

    let totalAmount = 0;
    for (let order in props.orders) {
        totalAmount += props.orders[order].pizza[props.orders[order].size] * props.orders[order].amount;
    }

    return (
        <div className="fixed w-full top-[15%] font-medium text-stone-800 z-20">
            <div className="w-[95%] sm:w-11/12 lg:w-3/4 rounded-lg left-0 right-0 absolute mx-auto
                rounded-lg">
                <header className="text-3xl bg-stone-200 rounded-t-lg py-2">
                    <h3 className="ps-3">Your Orders:</h3>
                </header>
                <hr className="bg-stone-800 h-0.5 w-full border-0" />
                <div className="p-5 bg-stone-200 text-xl max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto">
                    {props.orders.length > 0 ? <CartList orders={props.orders} /> : <p>Your pizza box is empty &#128557;</p>}
                    <OrderForm 
                        orders={props.orders} 
                        totalAmount={totalAmount} 
                        className="w-full bg-stone-200 text-xl" 
                    />
                </div>
                <hr className="bg-stone-800 h-0.5 w-full border-0" />
                <h4 className="bg-stone-200 text-2xl p-3">Total Amount: 
                    <p className="ms-1 text-green-500 inline">{totalAmount.toFixed(2)}$</p>
                </h4>
                <footer className="text-xl py-3 bg-stone-200 flex rounded-b-lg">
                    <button 
                        className="block p-2 px-6 hover:bg-red-500 ms-auto mr-6 mb-3 rounded-full bg-stone-400"
                        onClick={props.toggleCartModal}
                    >
                        Close
                    </button>
                </footer>
            </div>
        </div>
    )
}

const CartModal = props => {
    const ctx = React.useContext(CartContext);
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop 
                    toggleCartModal={props.toggleCartModal}
                />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    orders={ctx.orders}
                    toggleCartModal={props.toggleCartModal}
                />,
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default CartModal;
