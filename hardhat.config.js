/* eslint-disable no-undef */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

let PRIVATE_KEY =
	"00abcdefabcdefabcdefabcdefabcdef00abcdefabcdefabcdefabcdefabcdef";
let URL = "";

try {
	if (process.env.PRIVATE_KEY !== undefined) {
		PRIVATE_KEY = process.env.PRIVATE_KEY;
	}
	if (process.env.URL !== undefined) {
		URL = process.env.URL;
	}
} catch (e) {
	// Unable to find environment wallet key
}
const ETHERSCAN_API = process.env.ETHERSCAN_API;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

task("wallet", "Prints the current wallet", async (taskArgs, hre) => {
	console.log(PRIVATE_KEY);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.4",
	networks: {
		ropsten: {
			url: URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API,
	},
};
