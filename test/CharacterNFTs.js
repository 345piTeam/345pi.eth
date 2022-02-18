const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DarkLord", function () {
	let owner, darkLord;

	beforeEach(async () => {
		[owner] = await ethers.getSigners();
		const DarkLord = await ethers.getContractFactory("DarkLord");
		darkLord = await DarkLord.deploy();
		await darkLord.deployed();
	});

	it("Should set the owner to the contract creator", async function () {
		expect(await darkLord.getOwner()).to.equal(owner.address);
	});
});
