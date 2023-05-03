import React, { useState, useContext } from "react";
import useInput from "../../../hooks/use-input";
import CartContext from "../../../store/cart-context";
import BarLoader from "react-spinners/BarLoader";


const OrderForm = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmited, setIsSubmited] = useState(false);
    const [additional, setAdditional] = useState('');
    const ctx = useContext(CartContext);

    const {
        enteredValue: nameValue,
        valueIsValid: nameIsValid,
        invalidInput: nameHasError,
        changeInputHandler: nameInputHandler,
        blurInputHandler: nameBlurHandler,
        reset: nameReset,
    } = useInput(value => value.trim() !== '')

    const {
        enteredValue: lastNameValue,
        valueIsValid: lastNameIsValid,
        invalidInput: lastNameHasError,
        changeInputHandler: lastNameInputHandler,
        blurInputHandler: lastNameBlurHandler,
        reset: lastNameReset,
    } = useInput(value => value.trim() !== '')
    
    const {
        enteredValue: addressValue,
        valueIsValid: addressIsValid,
        invalidInput: addressHasError,
        changeInputHandler: addressInputHandler,
        blurInputHandler: addressBlurHandler,
        reset: addressReset,
    } = useInput(value => value.trim() !== '')

    const {
        enteredValue: phoneValue,
        valueIsValid: phoneIsValid,
        invalidInput: phoneHasError,
        changeInputHandler: phoneInputHandler,
        blurInputHandler: phoneBlurHandler,
        reset: phoneReset,
    } = useInput(value => /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value))

    const {
        enteredValue: emailValue,
        valueIsValid: emailIsValid,
        invalidInput: emailHasError,
        changeInputHandler: emailInputHandler,
        blurInputHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value));

    const formIsValid = nameIsValid && emailIsValid && phoneIsValid && addressIsValid && lastNameIsValid;

    const sendHttpRequest = async ({name, lastName, address, phone, email, additional}, orders, totalAmount) => {
        setIsLoading(true);
        setError(null);
        const tempOrders = { 
            personalData:{name, lastName, address, phone, email, additional}, 
            orders: [], 
            totalAmount: totalAmount
        };
        for (let i in orders) {
            tempOrders.orders.push({
                name: orders[i].pizza.name,
                amount: orders[i].amount,
                size: orders[i].size,
            })
        };
        try {
            const response = await fetch('https://react-http-4bff2-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
                method: 'POST',
                body: JSON.stringify(tempOrders),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (!response.ok) {
                throw new Error("Order couldn't be processed.");
            }
            const data = await response.json()
            console.log(data);
            ctx.resetOrders();
            setIsSubmited(true);
        } catch(error) {
            setError(true);
        }
        setIsLoading(false);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        sendHttpRequest({
            name: nameValue, 
            lastName: lastNameValue, 
            address: addressValue, 
            phone: phoneValue, 
            email: emailValue,
            additional: additional,
        }, props.orders, props.totalAmount);
        if (!error) {
            nameReset();
            lastNameReset();
            addressReset();
            phoneReset();
            emailReset();
            setAdditional('');
        }
    }

   const textareaInputChange = (event) => {
    setAdditional(event.target.value);
   }

    const invalidInputStyle = 'bg-red-400 text-red-600';

    return (
        <>
        { props.orders.length > 0 ? <form className={props.className} onSubmit={formSubmitHandler}>
            <div className="flex flex-wrap justify-center">
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="name">
                        Name{nameHasError && <p className=" inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={nameInputHandler}
                        onBlur={nameBlurHandler}
                        className={`p-1 w-full rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                            hover:outline hover:outline-2 hover:outline-orange-400 ${nameHasError && invalidInputStyle}`}
                        type="text" 
                        id="name"
                        value={nameValue}
                    />
                </div>
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="lastname">
                        Last Name{lastNameHasError && <p className="inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={lastNameInputHandler}
                        onBlur={lastNameBlurHandler}
                        className={`p-1 w-full rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 ${lastNameHasError && invalidInputStyle}`}
                        type="text" 
                        id="lastname"
                        value={lastNameValue}
                    />
                </div>
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="address">
                        Address{addressHasError && <p className="inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={addressInputHandler}
                        onBlur={addressBlurHandler}
                        className={`p-1 w-full rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 ${addressHasError && invalidInputStyle}`} 
                        type="text" 
                        id="address"
                        value={addressValue}
                    />
                </div>
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="phone">
                        Phone Number{phoneHasError && <p className="inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={phoneInputHandler}
                        onBlur={phoneBlurHandler}
                        className={`p-1 w-full rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 ${phoneHasError && invalidInputStyle}`} 
                        type="tel" 
                        id="phone"
                        placeholder="000-000-0000"
                        value={phoneValue}
                    />
                </div>
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="email">
                        Email{emailHasError && <p className="inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={emailInputHandler}
                        onBlur={emailBlurHandler}
                        className={`p-1 w-full rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 ${emailHasError && invalidInputStyle}`}
                        type="email" 
                        id="email"
                        value={emailValue}
                    />
                </div>
                <div className="w-3/4 m-3 mx-auto">
                    <label className="block ms-1" htmlFor="notes">Additional Notes</label>
                    <textarea 
                        value={additional}
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 w-full`} 
                        id="notes"
                        onChange={textareaInputChange}
                    ></textarea>
                </div>
            </div>
            
            <button 
                className={`block p-2 px-6 bg-orange-500 mx-auto rounded-full hover:bg-emerald-500
                    disabled:bg-orange-300 disabled:text-stone-400 disabled:cursor-no-drop`}
                type="submit"
                disabled={!formIsValid}
            >
                Order
            </button>
            { isLoading && <BarLoader className="mx-auto m-5" color="#36d7b7" /> }
            { isSubmited && <p className="text-green-400">Order is on your way.</p>}
            { error && <p className="text-red-400 w-fit mx-auto">Something went wrong try again.</p>}
        </form> : 
        <> 
            { isLoading && <BarLoader className="mx-auto m-5" color="#36d7b7" /> }
            { isSubmited && <p className="text-green-400">Order is on your way.</p>}
            { error && <p className="text-red-500 w-fit mx-auto">Something went wrong try again.</p>} 
        </>}
        </>
    )
}


export default OrderForm;
