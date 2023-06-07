import style from "./page.module.css";
import "../../styles/fonts.css";
import data from "../../api/items/data.json";
import companyData from "../../api/companies/companies.json";

const ItemInfo = ({ params }) => {
	const item = data.find(
		(el) => el._id === Number(params._id)
	);
	const company = companyData.find(
		(el) => el._id === item.companyId
	);
	const bodyPart = item.body_location;
	const inlineStyle = {
		backgroundImage: 'url("./grid.jpg")',
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	};
	// console.log("Company: ", company);
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
			<div
				className={style.ababua}
				style={inlineStyle}
			>
				<>
					<div className={style.itemWrapper}>
						<div className={style.itemImage}>
							<img
								src={item.imageSrc}
								className={style.image}
							/>
						</div>
						<div className={style.itemInfo}>
							<div
								className={style.itemDescription}
							>
								<p className={style.itemName}>
									{item.name}
								</p>
								<p className={style.category}>
									Category: Cyber-{item.category}
								</p>
								<p className={style.bodyLocation}>
									Suit-up with this perfect fit
									for your{" "}
									{bodyPart.toLowerCase()}
								</p>
							</div>
							<div
								className={style.purchaseSection}
							>
								<div
									className={
										style.itemAvailability
									}
								>
									{item.numInStock < 5 &&
									item.numInStock > 1 ? (
										<p className={style.stock}>
											{`Items in Stock: ${item.numInStock} (Hurry up!)`}{" "}
										</p>
									) : (
										<p className={style.stock}>
											{`Items in Stock: ${item.numInStock}`}
										</p>
									)}
								</div>
								<div className={style.itemPrice}>
									<p className={style.price}>
										{item.price}
									</p>
								</div>
							</div>
							<div
								className={
									style.companyInfoWrapper
								}
							>
								<a
									href="./"
									className={style.companyInfo}
								>
									<p
										className={style.companyName}
									>
										{company.name}
									</p>
									<p className={style.country}>
										{company.country}
									</p>
								</a>
								<div>
									<button
										className={style.button}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default ItemInfo;
