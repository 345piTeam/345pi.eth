/* eslint-disable no-undef */
const main = async () => {
	const [deployer] = await ethers.getSigners();
	console.log(`Address deploying the contract --> ${deployer.address}`);
	const tokenFactory = await ethers.getContractFactory("ProposalList");
	const contract = await tokenFactory.deploy();
	await contract.setDarkLordAddress(
		"0x833ee817125Df6c8fda55D15a528ED4878f65B60"
	);

	console.log(`Token Contract Address --> ${contract.address}`);
};

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error.stack);
		process.exit(1);
	});
