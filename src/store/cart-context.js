import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
    options: [],
    orders: [],
    orderPizza: () => {},
})

export const CartContextProvider = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("pizzaOrders")) {
            console.log(JSON.parse(localStorage.getItem("pizzaOrders")));
            setOrders(JSON.parse(localStorage.getItem("pizzaOrders")));
        }
        else {
            setOrders([]);
        }
    }, []);

    const addPizza = (pizza, size, amount) => {
        for (let order in orders) {
            if (pizza.name === orders[order].pizza.name && size === orders[order].size) {
                console.log(size + orders[order].size);
                setOrders(prevState => {
                    const newIndex = prevState.findIndex(el => el.pizza.name === pizza.name && el.size === size);
                    prevState[newIndex].amount += amount;
                    localStorage.setItem("pizzaOrders", JSON.stringify(prevState));
                    return prevState;
                })
                return;
            }
        }
        setOrders((prevState) => {
            localStorage.setItem("pizzaOrders", JSON.stringify([...prevState, {pizza: pizza, size: size, amount: amount}]));
            return ([...prevState, {pizza: pizza, size: size, amount: amount}]);
        });
        console.log(orders);
    }

    return (
        <CartContext.Provider
            value={{
                options: [
                    { 
                        name: 'Pizza bufalina', 
                        s: 9.99, 
                        m: 14.99, 
                        l: 22.99, 
                        ingredients: "tomato sauce, mozzarella, cherry tomato, olive oil, basil" 
                    },
                    { 
                        name: 'Prosciutto e funghi pizza',
                        s: 8.99, 
                        m: 12.99, 
                        l: 20.99 ,
                        ingredients: "tomato sauce, prosciutto cotto, mozzarella, mushrooms" 
                    },
                    { 
                        name: 'Pizza al padellino', 
                        s: 10.99, 
                        m: 15.99, 
                        l: 24.99 ,
                        ingredients: "seared pumpkin, gorgonzola cheese, spreadable cheese, lime, cream" 
                    },
                    { 
                        name: 'Pizza alla diavola', 
                        s: 9.99, 
                        m: 14.99, 
                        l: 22.99 ,
                        ingredients: "tomato sauce, salamino piccante, mozzarella, hot peppers, olives" 
                    },
                    { 
                        name: 'Pizza capricciosa', 
                        s: 7.99, 
                        m: 12.99, 
                        l: 19.99,
                        ingredients: "tomato sauce, prosciutto cotto, mozzarella, champignoi, artichoke, olives" 
                    },
                    { 
                        name: 'Caprese Pizza', 
                        s: 7.99, 
                        m: 12.99, 
                        l: 19.99,
                        ingredients: "cherry tomato, mozzarella, basil, olive oil" 
                    },
                    { 
                        name: 'Pizza al taglio', 
                        s: 10.99, 
                        m: 17.99, 
                        l: 25.99,
                        ingredients: `Pepperoni, garlic & spinach, onion, artichokes hearts, mushrooms, 
                            prosciutto cotto`,
                    },
                    { 
                        name: 'Pizza quattro formaggi', 
                        s: 9.99, 
                        m: 14.99, 
                        l: 22.99,
                        ingredients: "mozzarella, fontina, grana padano, gorgonzola, olive oil, basil" 
                    },
                    { 
                        name: 'Pizza Margherita', 
                        s: 7.99, 
                        m: 12.99, 
                        l: 19.99,
                        ingredients: "mozzarella, tomato, basil" 
                    },
                    { 
                        name: 'Pizza Napoletana', 
                        s: 9.99, 
                        m: 14.99, 
                        l: 22.99,
                        ingredients: "mozzarella, tomato, basil, olive oil, oregano" 
                    },
                ],
                orders: orders,
                orderPizza: addPizza,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;