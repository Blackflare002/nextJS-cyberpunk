"use client";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
	const {
		cart,
		cart: { items, size, totalCost },
		actions: {
			clearCart,
			saveOrder,
			removeItemFromCart,
			setStatusError,
			updateSingleItem,
		},
	} = useContext(AppContext);

	const handleRemoveFromCart = (_id) => {
		removeItemFromCart(_id);
	};

	const findNumInCart = (itemId) => {
		const foundIndex = cart.items.findIndex(
			(item) => item._id === itemId
		);
		return cart.items[foundIndex].numPurchased;
	};
	return <div>Cart</div>;
};

export default Cart;
