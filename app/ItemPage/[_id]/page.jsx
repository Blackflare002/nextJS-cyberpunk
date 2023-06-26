"use client";
import style from "./page.module.css";
import "../../styles/fonts.css";
import data from "../../api/items/data.json";
import companyData from "../../api/companies/companies.json";
import bgImg from "../../../public/images/grid.jpg";
import { useState } from "react";

const ItemInfo = ({ params }) => {
	const item = data.find(
		(el) => el._id === Number(params._id)
	);

	const bodyPart = item
		? item.body_location
		: null;

	const company = item
		? companyData.find(
				(el) => el._id === Number(item.companyId)
		  )
		: null;

	const [numOfItems, setNumOfItems] = useState(1);

	const handleInputChange = (e) => {
		let newValue = e.target.value;
		if (e.target.value <= 1) {
			newValue = 1;
		} else if (e.target.value >= item.numInStock)
			newValue = item.numInStock;
		setNumOfItems(newValue);
	};
	// console.log("image: ", bgImg.src);
	// console.log("Company: ", company);
	// console.log("id: ", Number(item.companyId));
	// console.log("Params: ", Number(params._id));
	// console.log(
	// 	"Data 0: ",
	// 	data.find(
	// 		(el) => el._id === Number(params._id)
	// 	)
	// );
	// console.log("Item: ", item);
	return (
		<>
			{item && company && (
				<>
					<div
						style={{
							backgroundImage: `url(${bgImg.src})`,
							position: "relative",
							height: "100vh",
							width: "100vw",
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div className={style.ababua}>
							<div className={style.itemWrapper}>
								<div className={style.itemImage}>
									<img
										src={item.imageSrc}
										className={style.image}
									/>
								</div>
								<div className={style.itemInfo}>
									<div
										className={
											style.itemDescription
										}
									>
										<p className={style.itemName}>
											{item.name}
										</p>
										<p className={style.category}>
											Category: Cyber-
											{item.category}
										</p>
										<p
											className={
												style.bodyLocation
											}
										>
											Suit-up with this perfect
											fit for your{" "}
											{bodyPart.toLowerCase()}
										</p>
									</div>
									<div
										className={
											style.purchaseSection
										}
									>
										<div
											className={
												style.itemAvailability
											}
										>
											{item.numInStock < 5 &&
											item.numInStock > 1 ? (
												<p
													className={style.stock}
												>
													{`Items in Stock: ${item.numInStock} (Hurry up!)`}{" "}
												</p>
											) : (
												<p
													className={style.stock}
												>
													{`Items in Stock: ${item.numInStock}`}
												</p>
											)}
										</div>
										<div
											className={style.itemPrice}
										>
											<p className={style.price}>
												{item.price}
											</p>
											<div
												className={
													style.subtotalWrapper
												}
											>
												<div
													className={
														style.subtotalLabel
													}
												>
													Subtotal:{" "}
												</div>

												<input
													className={
														style.subtotalInput
													}
													min={1}
													max={item.numInStock}
													type="number"
													value={numOfItems}
													onChange={
														handleInputChange
													}
												/>
												<p
													className={
														style.subtotalPrice
													}
												>
													$
													{Number(
														numOfItems *
															Number(
																item.price.slice(
																	1
																)
															)
													).toFixed(2)}
												</p>
											</div>
										</div>
									</div>
									<div
										className={
											style.companyInfoWrapper
										}
									>
										<a
											href="./"
											className={
												style.companyInfo
											}
										>
											<p
												className={
													style.companyName
												}
											>
												{company.name}
											</p>
											<p
												className={style.country}
											>
												{company.country}
											</p>
										</a>
										<div>
											{item.numInStock !== 0 ? (
												<button
													className={style.button}
												>
													Add to Cart
												</button>
											) : (
												<button
													className={style.button}
													disabled={true}
												>
													Sold Out
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ItemInfo;
