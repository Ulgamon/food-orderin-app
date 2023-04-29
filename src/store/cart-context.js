import React, { useState, useEffect, useCallback } from "react";

const CartContext = React.createContext({
    options: [],
    orders: [],
    orderPizza: () => {},
    numOfOrders: 0,
    removeOne: (name, size) => {},
    addOne: (name, size) => {},
    error: null,
    isLoading: false,
})

const returnAmount = (orders) => {
    let amountOfOrders = 0;
    for (let i in orders) {
        amountOfOrders += orders[i].amount;
    };
    return amountOfOrders;
}

export const CartContextProvider = (props) => {
    const [orders, setOrders] = useState([]);
    const [numOfOrders, setNumOfOrders] = useState(returnAmount(orders));
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("pizzaOrders")) {
            setOrders(JSON.parse(localStorage.getItem("pizzaOrders")));
            setNumOfOrders(returnAmount(JSON.parse(localStorage.getItem("pizzaOrders"))));
        }
        else {
            setOrders([]);
            setNumOfOrders(0);
        }
    }, []);

    const fetchMenu = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-http-4bff2-default-rtdb.europe-west1.firebasedatabase.app/menu.json');
            if (!response.ok) {
                throw new Error("Error while fetching data");
            };
            const data = await response.json();
            console.log(data);
            const loadedOptions = [];
            for (const key in data) {
                loadedOptions.push({
                    name: key.replace(/[']/g, ''),
                    s: data[key].s,
                    m: data[key].m,
                    l: data[key].l,
                    ingredients: data[key].ingredients,
                })
            }
            console.log(loadedOptions);
            setOptions(loadedOptions);
        } catch(error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, [])
    

    useEffect(() => {
        fetchMenu();
    }, [fetchMenu])

    const addPizza = (pizza, size, amount) => {
        for (let order in orders) {
            if (pizza.name === orders[order].pizza.name && size === orders[order].size) {
                console.log(size + orders[order].size);
                setOrders(prevState => {
                    const newIndex = prevState.findIndex(el => el.pizza.name === pizza.name && el.size === size);
                    prevState[newIndex].amount += amount;
                    setNumOfOrders(returnAmount(prevState));
                    localStorage.setItem("pizzaOrders", JSON.stringify(prevState));
                    return prevState;
                })
                return;
            }
        }
        setOrders((prevState) => {
            localStorage.setItem("pizzaOrders", JSON.stringify([...prevState, {pizza: pizza, size: size, amount: amount}]));
            setNumOfOrders(returnAmount([...prevState, {pizza: pizza, size: size, amount: amount}]));
            return ([...prevState, {pizza: pizza, size: size, amount: amount}]);
        });
        console.log(orders);
    }

    const removeOne = (name, size) => {
        let index = orders.findIndex(element => (element.pizza.name === name && element.size === size));
        console.log(index);
        if (index >= 0) {
            setOrders(prevState => {
                if (prevState[index].amount === 1) {
                    prevState.splice(index, 1);
                    console.log(prevState);
                    setNumOfOrders(returnAmount(prevState));
                    localStorage.setItem("pizzaOrders", JSON.stringify(prevState));
                    return prevState;
                }
                prevState[index].amount -= 1;
                console.log(prevState);
                setNumOfOrders(returnAmount(prevState));
                localStorage.setItem("pizzaOrders", JSON.stringify(prevState));
                return [...prevState];
            })
        }
    }

    const addOne = (name, size) => {
        let index = orders.findIndex(element => (element.pizza.name === name && element.size === size));
        console.log(index);
        if (index >= 0) {
            setOrders(prevState => {
                prevState[index].amount += 1;
                console.log(prevState);
                setNumOfOrders(returnAmount(prevState));
                localStorage.setItem("pizzaOrders", JSON.stringify(prevState));
                return [...prevState];
            })
        }
    }

    return (
        <CartContext.Provider
            value={{
                options: options,
                orders: orders,
                orderPizza: addPizza,
                numOfOrders: numOfOrders,
                removeOne: removeOne,
                addOne: addOne,
                error: error,
                isLoading: isLoading,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;