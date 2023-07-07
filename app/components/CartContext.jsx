"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	// Define cart items state using useState hook
	const [cartItems, setCartItems] = useState([]);

	// Define cart actions
	const addItem = (item) => {
		setCartItems((prevItems) => [
			...prevItems,
			item,
		]);
	};

	const removeItem = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.filter(
				(item) => item.id !== itemId
			)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	// Create the context value object
	// const contextValue = {
	// 	cartItems,
	// 	addItem,
	// 	removeItem,
	// 	clearCart,
	// };

	// Return the CartContext.Provider
	return (
		<CartContext.Provider
			value={{
				cartItems,
				addItem,
				removeItem,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
