"use client";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CartContext } from "../CartContext";
import style from "./TrueCart.module.css";
import Link from "next/link";

const TrueCart = () => {
	// dispatch,
	const { cartItems, clearCart } =
		useContext(CartContext);
	// const handleRemoveFromCart = (itemId) => {
	// 	dispatch({
	// 		type: "REMOVE_FROM_CART",
	// 		payload: itemId,
	// 	});
	// };
	// const handleClearCart = () => {
	// 	dispatch({ type: "CLEAR_CART" });
	// };
	const size = cartItems.length;
	const totalPrice = cartItems.reduce(
		(total, item) =>
			total +
			parseFloat(item.price.replace("$", "")),
		0
	);
	const handleClearCart = () => {
		clearCart();
		sessionStorage.clear();
	};

	// const [cartItems, setCartItems] = useState([]);
	// const addToCart = (product) => {
	// 	setCartItems((prevItems) => [
	// 		...prevItems,
	// 		product,
	// 	]);
	// };
	// const removeFromCart = (productId) => {
	// 	setCartItems((prevItems) =>
	// 		prevItems.filter(
	// 			(item) => item._id !== productId //like "items" in page.js, right?
	// 		)
	// 	);
	// };

	return (
		<div className={style.Wrapper}>
			<h1 className={style.Title}>
				Shopping Cart
			</h1>
			<div></div>
			<div className={style.LineBreak}></div>
			<ul>
				{cartItems &&
					cartItems.map((item) => (
						<div key={item._id}>
							<p>{item.name}</p>
							<p>{item.price}</p>
							{/* <button
								onClick={handleRemoveFromCart(
									item._Id
								)}
							>
								Remove
							</button> */}
						</div>
					))}
				{size > 0 && (
					<div className={style.SubtotalWrapper}>
						<p>Subtotal: ({size} items)</p>
						<p>Total: ${totalPrice.toFixed(2)}</p>
						<Link href={`/ConfirmPage`}>
							<button
								className={style.ConfirmBtn}
								onClick={handleClearCart}
							>
								Confirm Purchase
							</button>
						</Link>
					</div>
				)}
				{size == 0 && (
					<div className={style.EmptyCartBox}>
						<p>Your cart is empty.</p>
					</div>
				)}
			</ul>
		</div>
	);
};

export default TrueCart;
