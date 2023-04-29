import React from "react";

const OrderForm = (props) => {

    return (
        <form className={props.className + ' flex flex-wrap justify-center'}>
            <div className="m-3 lg:w-1/3">
                <label className="block ms-1" htmlFor="name">Name</label>
                <input 
                    className="p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400" 
                    type="text" 
                    id="name"
                />
            </div>
            <div className="m-3 lg:w-1/3">
                <label className="block ms-1" htmlFor="surname">Surname</label>
                <input 
                    className="p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400" 
                    type="text" 
                    id="surname"
                />
            </div>
            <br />
            <div className="m-3 lg:w-1/3">
                <label className="block ms-1" htmlFor="address">Address</label>
                <input 
                    className="p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400" 
                    type="text" 
                    id="address"
                />
            </div>
            <div className="m-3 lg:w-1/3">
                <label className="block ms-1" htmlFor="phone">Phone Number</label>
                <input 
                    className="p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400" 
                    type="tel" 
                    id="phone"
                />
            </div>
            <div className="w-3/4 m-3 mx-auto">
                <label className="block ms-1" htmlFor="notes">Additional Notes</label>
                <textarea 
                    className="w-full p-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-400" 
                    id="notes"
                ></textarea>
            </div>
        </form>
    )
}


export default OrderForm;