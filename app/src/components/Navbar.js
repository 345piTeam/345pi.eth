import React from "react";
import styles from "./css/Navbar.module.css";
import logoImg from "../images/345piUsLogo_H.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DrizzleContext } from "@drizzle/react-plugin";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
	const NavbarButton = ({ name, link }) => (
		<NavLink exact to={link} activeClassName={"active"}>
			<div className={styles.navButton}>{name}</div>
		</NavLink>
	);

	const WalletDisconnected = () => (
		<div className={styles.walletStatus}>
			<CloseCircleOutlined id={styles.walletDisconnected} />
			<p>Wallet Disconnected</p>
		</div>
	);

	const WalletConnected = () => (
		<div className={styles.walletStatus}>
			<CheckCircleOutlined id={styles.walletConnected} />
			<p>Wallet Connected</p>
		</div>
	);

	return (
		<DrizzleContext.Consumer>
			{(drizzleContext) => {
				const { drizzle, drizzleState, initialized } = drizzleContext;
				console.log(drizzleContext);

				return (
					<div className={styles.navbar}>
						<div className={styles.logoContainer}>
							<Link to={"/"}>
								<img
									className={styles.logoStyles}
									src={logoImg}
									alt={"345pi"}
								/>
							</Link>
						</div>
						<div className={styles.buttonsContainer}>
							<NavbarButton name="Home" link="/" />
							<NavbarButton name="Marketplace" link="/marketplace" />
							<NavbarButton name="Governance" link="/governance" />
						</div>
						<div className={styles.walletStatusContainer}>
							{initialized ? <WalletConnected /> : <WalletDisconnected />}
						</div>
					</div>
				);
			}}
		</DrizzleContext.Consumer>
	);
};

export default Navbar;
