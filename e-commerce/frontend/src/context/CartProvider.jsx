import { createContext, useEffect } from "react";
import PropTypes from 'prop-types'
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    const addToCart = (cartItem) => {
        setCartItems((PrevCart) => [...PrevCart,{
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity:1,
        },])
    }
    const removeFromCart=(itemId)=> {
        const filteredCartItems=cartItems.filter((cartItem)=>
        {
            return cartItem._id!==itemId
        })
        setCartItems(filteredCartItems)
    }
    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.node

};