import Election from "./contracts/Election.json";

const options = {
	contracts: [Election],
	web3: {
		fallback: {
			type: "ws",
			url: "ws://localhost:7545",
		},
	},
};

export default options;
