import Web3 from "web3";
import ProposalList from "./contracts/ProposalList.json";

const options = {
	web3: {
		block: false,
		customProvider: new Web3("ws://localhost:7545"),
	},
	contracts: [ProposalList],
};

export default options;
