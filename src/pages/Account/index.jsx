import styles from "./index.css";
import React from "react";
import NFTs from "../../components/NFTs/index"
import ERC20Transactions from "../../components/ERC20Transfers/"


const NFTDisplay = () => (
	<div className="wrapper">
		<NFTs />
		<ERC20Transactions />
	</div>
);

export default NFTDisplay;
