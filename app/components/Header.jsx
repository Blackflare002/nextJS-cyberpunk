"use client";
import style from "./Header.module.css";
import Link from "next/link";
import logo from "../../public/images/logo.jpg";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { CartContext } from "./CartContext";

const Header = () => {
	// const {
	// 	cart: { items, totalCost, size },
	// } = useContext(AppContext);
	const { cartItems } = useContext(CartContext);
	return (
		<div className={style.glow}>
			<header className={style.wrapper}>
				<Link
					href="./"
					className={style.styledLink}
				>
					<div className={style.homeWrapper}>
						<img
							src={logo.src}
							className={style.logo}
						/>
						<h3 className={style.title}>
							HACKERMAN
						</h3>
					</div>
				</Link>
				<p className={style.catchPhrase}>
					Rage-quit your life, follow me to
					Cyberspace...
				</p>
				<div>
					<Link
						href={`/cart`}
						className={style.styledLink}
					>
						<div className={style.cartBox}>
							<span className={style.cartSize}>
								{/* {size} */}
								{cartItems.length}
							</span>
							<RiShoppingCartLine />
							<span>Cart</span>
						</div>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Header;
