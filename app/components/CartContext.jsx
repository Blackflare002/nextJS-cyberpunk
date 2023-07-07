"use client";
import React, {
	createContext,
	useReducer,
} from "react";
import cartReducer from "./cartReducer";

const initialState = {
	cartItems: [],
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		cartReducer,
		initialState
	);

	return (
		<CartContext.Provider
			value={{
				cartItems: state.cartItems,
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
