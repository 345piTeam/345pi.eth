const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DarkLord", function () {
	let owner, addr1, addr2, addr3, darkLord;

	beforeEach(async () => {
		[owner, addr1, addr2, addr3] = await ethers.getSigners();
		const DarkLord = await ethers.getContractFactory("DarkLord");
		darkLord = await DarkLord.deploy();
		await darkLord.deployed();
		darkLord.safeMint(owner.address, "1");
	});

	it("Should set the owner to the contract creator", async function () {
		expect(await darkLord.isOwner(addr1.address)).to.equal(false);
		expect(await darkLord.isOwner(owner.address)).to.equal(true);
	});
});
