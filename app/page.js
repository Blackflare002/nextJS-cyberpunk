"use client";
import { useState, useEffect } from "react";
import Items from "./components/Items";
import styles from "./page.module.css";
import "./styles/fonts.css";

const Homepage = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const res = await fetch("/api/items");
			// console.log("res: ", res);
			const data = await res.json();
			// console.log("Data: ", data);
			setItems(data);
		};
		fetchItems();
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.hero}>
				<div>
					<h1
						className={styles.bigTypography}
						style={{ fontFamily: "TronFont" }}
					>
						HACKERMAN
					</h1>
				</div>
				<div>
					<h1 className={styles.tagline}>
						Premium Cyber Gear
					</h1>
				</div>
			</div>
			<div>
				<ul className={styles.styledUl}>
					<div className={styles.wrapper}>
						{items.map((item) => (
							<Items
								key={Math.floor(
									Math.random() * 4206969
								)}
								items={item}
							/>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Homepage;
