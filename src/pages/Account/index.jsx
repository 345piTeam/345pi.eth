import "./index.css";
import React from "react";
import NFTs from "../../components/NFTBalance/index"
import ERC20Transactions from "../../components/ERC20Transfers/"


const NFTDisplay = () => (
	<div className="wrapper">
		<div className="card"><NFTs /></div>
		<div className="card"><ERC20Transactions /></div>
	</div>
);

export default NFTDisplay;
