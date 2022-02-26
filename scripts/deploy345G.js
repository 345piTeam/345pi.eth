const main = async () => {
	const initialSupply = ethers.utils.parseEther("1000000");

	const [deployer] = await ethers.getSigners();
	console.log(`Address deploying the contract --> ${deployer.address}`);
	const tokenFactory = await ethers.getContractFactory("GovernanceToken");
	const contract = await tokenFactory.deploy(initialSupply);

	console.log(`Token Contract Address --> ${contract.address}`);
};

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error.stack);
		process.exit(1);
	});
