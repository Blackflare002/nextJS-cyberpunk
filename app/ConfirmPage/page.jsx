import React from "react";
import Confirm from "../components/Confirm";
import style from "./page.module.css";

const ConfirmPage = () => {
	return (
		<div className={style.wrapper}>
			<Confirm />
		</div>
	);
};

export default ConfirmPage;
