import styles from "./Items.module.css";

const Items = ({ items }) => {
	return (
		<div>
			<li className={styles.styledLi}>
				<div>
					<img
						className={styles.styledImg}
						src={items.imageSrc}
					/>
					<p>
						{items.name.length < 65
							? items.name
							: items.name.slice(0, 65) + "..."}
					</p>
				</div>
				<div>
					<p>In Stock: {items.numInStock}</p>
					<p>{items.price}</p>
				</div>
			</li>
		</div>
	);
};

export default Items;
