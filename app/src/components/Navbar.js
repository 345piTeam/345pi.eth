import React from "react";
import styles from "./css/Navbar.module.css";
import logoImg from "../images/345piUsLogo_H.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const classNameGenerator = (e) => {
		const ret = styles.navButton;
		//if (e === currentPage) {
		//	return ret + " " + styles.currentPage;
		//}
		return ret;
	};

	const NavbarButton = ({ name, link }) => (
		<Link to={link}>
			<div className={classNameGenerator(name)}>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</div>
		</Link>
	);

	return (
		<div className={styles.navbar}>
			<Link to={"/"}>
				<img className={styles.logoStyles} src={logoImg} alt={"345pi"} />
			</Link>
			<div className={styles.buttonsContainer}>
				<NavbarButton name="home" link="/" />
				<NavbarButton name="marketplace" link="/marketplace" />
				<NavbarButton name="governance" link="/governance" />
			</div>
			<img
				className={styles.logoStyles}
				src={logoImg}
				alt={""}
				style={{ opacity: "0" }}
			/>
		</div>
	);
};

export default Navbar;
