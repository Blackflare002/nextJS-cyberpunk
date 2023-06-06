"use client";
import style from "./page.module.css";
import "../../styles/fonts.css";
import itemsData from "../../api/items/data.json";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ItemInfo = ({ params }) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"../../api/items/data.json"
				);
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.error(
					"Error fetching data:",
					error
				);
			}
		};
		fetchData();
	}, []);
	const router = useRouter();
	const { _id } = router.query;
	// const { _id } = params._id;
	// const searchParams = useSearchParams();
	// const search = searchParams.get(_id);
	const selectedItem = items.find(
		(el) => el._id === _id
	);
	return (
		<div>
			<h1>{selectedItem.name}</h1>
			<div>{params._id}</div>
			<p>PAGE</p>
		</div>
	);
};

export default ItemInfo;
