import React from "react";
import styles from "./css/Navbar.module.css";
import logoImg from "../images/345piUsLogo_H.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCurrent } from "../features/navbar.js";
import { updateElectionData } from "../features/election.js";
import Web3 from "web3";

const Navbar = () => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state) => state.navbar.value);
	const electionData = useSelector((state) => state.election.value);

	const classNameGenerator = (e) => {
		const ret = styles.navButton;
		if (e === currentPage) {
			return ret + " " + styles.currentPage;
		}
		return ret;
	};

	const initWeb3 = () => {
		const newProvider = new Web3.providers.HttpProvider(
			"http://localhost:7545"
		);
		const newAccount = electionData.account + 1;
		console.log(newAccount);
		return { web3Provider: newProvider, contracts: {}, account: newAccount };
	};

	const NavbarButton = ({ name }) => (
		<Link to={"/" + name}>
			<Button
				className={classNameGenerator(name)}
				ghost={true}
				onClick={() => {
					dispatch(updateCurrent(name));
					if (name === "governance") {
						dispatch(updateElectionData(initWeb3()));
					}
				}}
			>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</Button>
		</Link>
	);

	return (
		<div className={styles.navbar}>
			<Link to={"/home"} onClick={() => dispatch(updateCurrent("home"))}>
				<img className={styles.logoStyles} src={logoImg} alt={"345pi"} />
			</Link>
			<div className={styles.buttonsContainer}>
				<NavbarButton name="home" />
				<NavbarButton name="marketplace" />
				<NavbarButton name="governance" />
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
