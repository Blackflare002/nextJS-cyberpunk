"use client";
import { useState, useEffect } from "react";
import Items from "./components/Items";

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
		<>
			<ul>
				<div>
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
		</>
	);
};

export default Homepage;
