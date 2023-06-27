import { useContext } from "react";
import { AppContext } from "./AppContext";
import styles from "./Confirm.module.css";

const Confirm = () => {
	const { completedOrder } =
		useContext(AppContext);
	return (
		<div className={styles.Wrapper}>
			{completedOrder && (
				<>
					<div>
						<ul>
							<li className={styles.Item}>
								<span className={styles.Title}>
									Order completed
								</span>
								<div
									className={styles.Dashed}
								></div>
								<span>.</span>
							</li>
							<li className={styles.Item}>
								<span>.</span>
								<div
									className={styles.Dashed}
								></div>
								<span>.</span>
							</li>
							{completedOrder.items.map((el) => {
								return (
									<li className={styles.Item}>
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
										<div
											className={styles.Dashed}
										></div>
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
							<li className={styles.Item}>
								<span>.</span>
								<div
									className={styles.Dashed}
								></div>
								<span>.</span>
							</li>
							<li className={styles.Item}>
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
