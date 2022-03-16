/* eslint-disable no-undef */
const main = async () => {
	const [deployer] = await ethers.getSigners();
	console.log(`Address deploying the contract --> ${deployer.address}`);
	const tokenFactory = await ethers.getContractFactory("G345");
	const contract = await tokenFactory.deploy();

	console.log(`Token Contract Address --> ${contract.address}`);
};

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error.stack);
		process.exit(1);
	});
