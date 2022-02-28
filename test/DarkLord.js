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

	describe("Deployment", function () {
		it("Should set the owner to the contract creator", async function () {
			expect(await darkLord.isOwner(addr1.address)).to.equal(false);
			expect(await darkLord.isOwner(owner.address)).to.equal(true);
		});
	});

	describe("Transactions", function () {
		it("Should transfer NFTs between accounts", async function () {
			await darkLord.approve(addr1.address, 0);
			await darkLord
				.connect(addr1)
				.transferFrom(owner.address, addr1.address, 0);
			expect(await darkLord.ownerOf(0)).to.equal(addr1.address);

			// Test isOwner feature
			expect(await darkLord.isOwner(owner.address)).to.equal(false);
			expect(await darkLord.isOwner(addr1.address)).to.equal(true);
		});
	});
});
