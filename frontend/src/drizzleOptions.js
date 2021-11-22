import Election from "./contracts/Election.json";

const options = {
	contracts: [Election],
	web3: {
		fallback: {
			type: "ws",
			url: "ws://127.0.0.1:7545",
		},
	},
};

export default options;
