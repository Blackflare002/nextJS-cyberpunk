import { useContext, useState } from "react";
import styles from "./Items.module.css";
import Link from "next/link";
import { AppContext } from "./AppContext";
import { CartContext } from "./CartContext";
// import {
// 	addToCart,
// 	removeFromCart,
// } from "./Cart/TrueCart";

const Items = ({ items, el }) => {
	// const {
	// 	// items,
	// 	actions: { addItemToCart },
	// } = useContext(AppContext);

	// const { dispatch, addItemToCart } =
	// 	useContext(CartContext);

	const { addItemToCart } =
		useContext(CartContext);

	// const handleAddToCart = () => {
	// 	dispatch({
	// 		type: "ADD_TO_CART",
	// 		payload: el,
	// 	});
	// };
	const handleAddToCart = () => {
		addItemToCart(el);
	};
	return (
		<div>
			<li className={styles.styledLi}>
				<div className={styles.itemContainer}>
					<Link
						className={styles.styledLink}
						href={`/ItemPage/${items._id}`}
					>
						<div className={styles.itemInnerBox}>
							<div>
								<img
									className={styles.styledImg}
									src={items.imageSrc}
								/>
								<p
									className={
										styles.styledItemName
									}
								>
									{items.name.length < 65
										? items.name
										: items.name.slice(0, 65) +
										  "..."}
								</p>
							</div>
							<div>
								<p>
									In Stock: {items.numInStock}
								</p>
							</div>
							{items.numInStock === 0 && (
								<div className={styles.OOSRibbon}>
									Sold Out
								</div>
							)}
							<div className={styles.priceAndBtn}>
								<p
									className={
										styles.styledItemPrice
									}
								>
									{items.price}
								</p>
								<button
									className={styles.styledButton}
									// onClick={(ev) => {
									// 	ev.preventDefault();
									// 	ev.stopPropagation();
									// 	// addItemToCart(items);
									// 	// addToCart(product);
									// 	// removeFromCart(productId);
									// 	// handleAddToCart;
									// }}
									disabled={
										items.numInStock === 0
											? true
											: false
									}
									isinstock={
										items.numInStock > 0
											? "true"
											: "false"
									}
								>
									{items.numInStock > 0
										? "See More"
										: "Sold out"}
								</button>
							</div>
						</div>
					</Link>
				</div>
			</li>
		</div>
	);
};

export default Items;
