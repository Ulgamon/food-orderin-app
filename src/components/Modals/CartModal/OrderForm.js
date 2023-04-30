import React from "react";
import useInput from "../../../hooks/use-input";

const OrderForm = (props) => {

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
    } = useInput(value => /^[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(value))

    const {
        enteredValue: emailValue,
        valueIsValid: emailIsValid,
        invalidInput: emailHasError,
        changeInputHandler: emailInputHandler,
        blurInputHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))

    const formIsValid = nameIsValid && emailIsValid && phoneIsValid && addressIsValid && lastNameIsValid;

    const invalidInputStyle = 'bg-red-400 text-red-600';

    return (
        <form className={props.className}>
            <div className="flex flex-wrap justify-center">
                <div className="m-3 lg:w-1/3">
                    <label className="block ms-1" htmlFor="name">
                        Name{nameHasError && <p className=" inline text-red-600"> (required*)</p>}</label>
                    <input 
                        onChange={nameInputHandler}
                        onBlur={nameBlurHandler}
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
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
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
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
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
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
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
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
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 ${emailHasError && invalidInputStyle}`}
                        type="email" 
                        id="email"
                        value={emailValue}
                    />
                </div>
                <div className="w-3/4 m-3 mx-auto">
                    <label className="block ms-1" htmlFor="notes">Additional Notes</label>
                    <textarea 
                        className={`p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400 
                        hover:outline hover:outline-2 hover:outline-orange-400 w-full`} 
                        id="notes"
                    ></textarea>
                </div>
            </div>
            
            <button 
                className="block p-2 px-6 bg-orange-500 mx-auto rounded-full hover:bg-emerald-500"
                type="submit"
            >
                Order
            </button>
        </form>
    )
}


export default OrderForm;