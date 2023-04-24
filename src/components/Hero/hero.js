import React from "react";
import pizzaHero from "./pizzahero.jpg";
import hero from "./hero.jpg";

const Hero = () => {
    let picture = hero;
    if (window.innerWidth <= 950) {
        picture = pizzaHero;
    }
    console.log(window.innerWidth)
    return (
        <div className="mx-auto w-full">
            <img style={{maxWidth: "1920px"}} className="w-full" src={picture} alt="pizza" />
            <div className="absolute w-full top-1/4">
                <div className="bg-stone-600 mx-auto w-11/12 lg:w-1/2 text-white z-0 p-3 rounded-2xl">
                    <h3 className="text-5xl text-center m-4">Delicious Pizza, Delivered To You</h3>
                    <p className="m-6">Choose your favorite pizza from our broad selection of available pizza and enjoy
                        a delicious lunch or dinner at home.
                    </p>
                    <p className="m-6">All our pizzas are cooked with high-quality ingredients , just-in-time 
                        and of course by experienced chefs!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;