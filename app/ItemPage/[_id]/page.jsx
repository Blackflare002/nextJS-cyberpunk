"use client";
import style from "./page.module.css";
import "../../styles/fonts.css";
import itemsData from "../../api/items/data.json";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../api/items/data.json";

const ItemInfo = ({ params }) => {
	const item = data.find(
		(el) => el._id === Number(params._id)
	);
	// console.log("Params: ", Number(params._id));
	// console.log(
	// 	"Data 0: ",
	// 	data.find(
	// 		(el) => el._id === Number(params._id)
	// 	)
	// );
	// console.log("Item: ", item);
	return (
		<div>
			<h1>{item.name}</h1>
			<div>{params._id}</div>
			<p>PAGE</p>
		</div>
	);
};

export default ItemInfo;
