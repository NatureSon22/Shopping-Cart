import { createContext, useContext, useState } from "react"
import { PRODUCTS } from "../data";

const ShopContext = createContext({});

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId] : prev[itemId] + 1 }));
    }

    const removeItem = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId] : prev[itemId] - 1 }));
    }

    const value = {
        cartItems, 
        addItem,
        removeItem,
        setCartItems,
        getDefaultCart
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopContextProvider = () => useContext(ShopContext);
export default ShopContextProvider