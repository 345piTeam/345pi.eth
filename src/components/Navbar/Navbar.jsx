import React from "react";
import styles from "./Navbar.module.css";
import logoImg from "../../images/345piUsLogo_H.png";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import Account from "../Account/Account.jsx";

const Navbar = () => {
	const NavbarButton = ({ name, link }) => (
		<NavLink to={link} activeclassname="active">
			<div className={styles.navButton}>{name}</div>
		</NavLink>
	);

	return (
		<div className={styles.navbar}>
			<Link to={"/"}>
				<div className={styles.logoContainer}>
					<img className={styles.logoStyles} src={logoImg} alt={"345pi"} />
				</div>
			</Link>
			<div className={styles.buttonsContainer}>
				<Tooltip title={<span>prompt text</span>}>
					<NavbarButton name="Home" link="/" />
				</Tooltip>
				<NavbarButton name="NFTs" link="/NFTs" />
				<NavbarButton name="Governance" link="/governance" />
			</div>
			<div id={styles.walletConnectButton}>
				<Account />
			</div>
		</div>
	);
};

export default Navbar;
