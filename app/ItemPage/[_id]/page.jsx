import style from "./page.module.css";
import "../../styles/fonts.css";

const ItemInfo = ({ params }) => {
	return (
		<div>
			<div>{params._id}</div>
			<p>PAGE</p>
		</div>
	);
};

export default ItemInfo;
