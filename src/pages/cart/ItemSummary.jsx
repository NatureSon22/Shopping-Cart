import { useEffect, useState } from "react";
import { useShopContextProvider } from "../../context/ShopContextProvider";

const ItemSummary = ({ info, quantity }) => {
    const [ amount, setAmount ] = useState(quantity);
    const { addItem, removeItem, cartItems, setCartItems } = useShopContextProvider();
    const { id, productName, price, img } = info;
    const total = (!isNaN(parseInt(amount)) ? parseInt(amount) : 0) * parseFloat(price);
    

    const addAmount = () => {
        setAmount(prev => prev + 1);
        addItem(id);
    }

    const subAmount = () => {
        if (amount > 1) {
            setAmount(prev => prev - 1);
        }

        if (cartItems[id] > 0) {
            removeItem(id);
        }
    }

    const handleInput = (val) => {
        if(parseInt(val) == 0 || isNaN(val)) return

        setAmount(prevAmount => {
            const newAmount = val ? val : '';
            if(newAmount) {
                setCartItems(prevCartItems => ({ ...prevCartItems, [id]: newAmount }));
            }
            return newAmount;
        });
    }
    
    const handleClick = () => {
        setCartItems(prevCartItems => ({ ...prevCartItems, [id]: 0 }));
    }

    return (
        <div className="item--summary">
            <div className="item--info">
                <div className="item--img">
                    <img src={img} alt={productName} />
                </div>

                <div className="item--action">
                    <p>{productName}</p>
                    <button onClick={handleClick} >Remove</button>
                </div>
            </div>

            <div className="item--quantity">
                <button onClick={subAmount} >-</button>
                <input type="text" value={amount} onChange={(e) => handleInput(e.target.value)} />
                <button onClick={addAmount} >+</button>
            </div>

            <div className="item--price">
                <span>${price}</span>
            </div>

            <div className="total">
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ItemSummary