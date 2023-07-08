// "use client";
// import React, {
// 	createContext,
// 	useReducer,
// } from "react";
// import cartReducer from "./cartReducer";

// const initialState = {
// 	cartItems: [],
// };

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
// 	const [state, dispatch] = useReducer(
// 		cartReducer,
// 		initialState
// 	);

// 	return (
// 		<CartContext.Provider
// 			value={{
// 				cartItems: state.cartItems,
// 				dispatch,
// 			}}
// 		>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };

// export { CartContext, CartProvider };

"use client";
import React, {
	createContext,
	useState,
	useEffect,
} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	// const addItemToCart = (item) => {
	// 	setCartItems([...cartItems, item]);
	// };
	useEffect(() => {
		// Load cart items from sessionStorage on component mount
		const storedCartItems =
			sessionStorage.getItem("cartItems");
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems));
		}
	}, []);
	const addItemToCart = (item) => {
		const updatedCartItems = [...cartItems, item];
		// Update cartItems state
		setCartItems(updatedCartItems);
		// Update sessionStorage with updated cartItems
		sessionStorage.setItem(
			"cartItems",
			JSON.stringify(updatedCartItems)
		);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addItemToCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
