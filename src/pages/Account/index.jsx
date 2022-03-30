import styles from "./index.module.css";
import React from "react";
import NFTs from "../../components/NFTBalance/index"
import ERC20Transactions from "../../components/ERC20Transfers/"


const NFTDisplay = () => (
	<div className={styles.wrapper}>
		<div className={styles.card}><NFTs /></div>
		<div className={styles.card}><ERC20Transactions /></div>
	</div>
);

export default NFTDisplay;
