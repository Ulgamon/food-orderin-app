import React from "react";

const Hero = () => {

    return (
        <div className="mx-auto mt-20 w-full">
            <div className="bg-stone-600 mx-auto w-[95%] sm:w-11/12 lg:w-1/2 text-white z-0 p-3 rounded-2xl">
                <h3 className="text-5xl text-center m-4">Delicious Pizza, Delivered To You</h3>
                <p className="m-6">Choose your favorite pizza from our broad selection of available pizza and enjoy
                    a delicious lunch or dinner at home.
                </p>
                <p className="m-6">All our pizzas are cooked with high-quality ingredients, just-in-time 
                    and of course by experienced chefs!
                </p>
                <div className="flex justify-center text-xl sm:text-2xl m-2">
                    <p className="bg-stone-500 p-3 rounded-xl m-1">S: 17cm</p>
                    <p className="bg-stone-500 p-3 rounded-xl m-1">M: 25cm</p>
                    <p className="bg-stone-500 p-3 rounded-xl m-1">L: 32cm</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;
