"use client";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CartContext } from "../CartContext";
import style from "./TrueCart.module.css";

const TrueCart = () => {
	const { dispatch, cartItems } =
		useContext(CartContext);
	const handleRemoveFromCart = (itemId) => {
		dispatch({
			type: "REMOVE_FROM_CART",
			payload: itemId,
		});
	};
	const handleClearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	const size = cartItems.length;
	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price,
		0
	);

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
							<button
								onClick={handleRemoveFromCart(
									item._Id
								)}
							>
								Remove
							</button>
						</div>
					))}
				{size > 0 && (
					<div className={style.SubtotalWrapper}>
						<p>Subtotal: ({size} items)</p>
						<p>Total: ${totalPrice}</p>
						<Link href={`/ConfirmPage`}>
							<button
								className={style.ConfirmBtn}
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
