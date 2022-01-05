import React from "react";
import styles from "./css/Navbar.module.css";
import logoImg from "../images/345piUsLogo_H.png";
import { Link, NavLink } from "react-router-dom";
import { DrizzleContext } from "@drizzle/react-plugin";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const Navbar = () => {
	const NavbarButton = ({ name, link }) => (
		<NavLink to={link} activeClassName="active">
			<div className={styles.navButton}>{name}</div>
		</NavLink>
	);

	const WalletDisconnected = () => (
		<Tooltip
			title={<span style={{ fontSize: "24px" }}>Wallet Disconnected</span>}
			placement="bottomRight"
			color="#c43636"
			arrowPointAtCenter
		>
			<div className={styles.walletStatus}>
				<CloseCircleOutlined
					id={styles.walletDisconnected}
					className={styles.walletStatusIcon}
				/>
			</div>
		</Tooltip>
	);

	const WalletConnected = () => (
		<Tooltip
			title={<span style={{ fontSize: "24px" }}>Wallet Connected</span>}
			placement="bottomRight"
			color="#3aa859"
			arrowPointAtCenter
		>
			<div className={styles.walletStatus}>
				<CheckCircleOutlined
					id={styles.walletConnected}
					className={styles.walletStatusIcon}
				/>
				<p className={styles.walletStatusMessage}>Wallet Connected</p>
			</div>
		</Tooltip>
	);

	return (
		<DrizzleContext.Consumer>
			{(drizzleContext) => {
				const { initialized } = drizzleContext;
				return (
					<div className={styles.navbar}>
						<Link to={"/"}>
							<div className={styles.logoContainer}>
								<img
									className={styles.logoStyles}
									src={logoImg}
									alt={"345pi"}
								/>
							</div>
						</Link>
						<div className={styles.buttonsContainer}>
							<Tooltip title={<span>prompt text</span>}>
								<NavbarButton name="Home" link="/" />
							</Tooltip>
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
