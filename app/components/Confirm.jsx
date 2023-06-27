import { useContext } from "react";
import { AppContext } from "./AppContext";

const Confirm = () => {
	const { completedOrder } =
		useContext(AppContext);
	return (
		<div className="Wrapper">
			{completedOrder && (
				<>
					<div>
						<ul>
							<li className="Item">
								<span className="Title">
									Order completed
								</span>
								<div className="Dashed"></div>
								<span>.</span>
							</li>
							<li className="Item">
								<span>.</span>
								<div className="Dashed"></div>
								<span>.</span>
							</li>
							{completedOrder.items.map((el) => {
								return (
									<li className="Item">
										<span>{el.name}</span>
										{el.numPurchased > 1 && (
											<span
												style={{
													marginLeft: "1rem",
													fontWeight: "bold",
												}}
											>
												x{item.numPurchased}
											</span>
										)}
										<div className="Dashed"></div>
										<span>
											$
											{(
												el.numPurchased *
												Number(el.price.slice(1))
											).toFixed(2)}
										</span>
									</li>
								);
							})}
							<li className="Item">
								<span>.</span>
								<div className="Dashed"></div>
								<span>.</span>
							</li>
							<li className="Item">
								<span>.</span>
								<Dashed></Dashed>
								<span
									style={{ fontSize: "1rem" }}
								>
									Total: $
									{completedOrder.totalCost}
								</span>
							</li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default Confirm;
