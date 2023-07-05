"use client";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import style from "./TrueCart.module.css";

const TrueCart = () => {
	const [cartItems, setCartItems] = useState([]);
	const addToCart = (product) => {
		setCartItems((prevItems) => [
			...prevItems,
			product,
		]);
	};
	const removeFromCart = (productId) => {
		setCartItems((prevItems) =>
			prevItems.filter(
				(item) => item._id !== productId //like "items" in page.js, right?
			)
		);
	};

	return (
		<div className={style.Wrapper}>
			<h1 className="Title">Shopping Cart</h1>
			<div></div>
			<div className="LineBreak"></div>
			<ul>{/* TO DO */}</ul>
		</div>
	);
};

export default TrueCart;
