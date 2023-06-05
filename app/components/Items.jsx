import styles from "./Items.module.css";
import Link from "next/link";

const Items = ({ items }) => {
	return (
		<div>
			<li className={styles.styledLi}>
				<div className={styles.itemContainer}>
					<Link href=""></Link>
					<div className={styles.itemInnerBox}>
						<div>
							<img
								className={styles.styledImg}
								src={items.imageSrc}
							/>
							<p
								className={styles.styledItemName}
							>
								{items.name.length < 65
									? items.name
									: items.name.slice(0, 65) +
									  "..."}
							</p>
						</div>
						<div>
							<p>In Stock: {items.numInStock}</p>
						</div>
						{items.numInStock === 0 && (
							<div className={styles.OOSRibbon}>
								Sold Out
							</div>
						)}
						<div className={styles.priceAndBtn}>
							<p
								className={styles.styledItemPrice}
							>
								{items.price}
							</p>
							<button
								className={styles.styledButton}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</li>
		</div>
	);
};

export default Items;
