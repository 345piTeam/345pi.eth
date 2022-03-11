/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Presale", function () {
	before(async function () {
		// Get the ContractFactory and Signers here.
		Pre = await ethers.getContractFactory("Presale");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
		Presale = await Pre.deploy();
		await Presale.deployed();

		const Wizard = await ethers.getContractFactory("Wizard");
		wizard = await Wizard.deploy();
		await wizard.deployed();
		console.log(wizard.address);
		await wizard.safeMint(Presale.address, "0");
	});
	describe("Presale Investing", function () {
		it("Added to investor list", async function () {
			await Presale.connect(addr1).invest(5);
			console.log(Presale.isInvestor);
			expect(await Presale.isInvested(addr1.address)).to.equal(true);
		});
		it("A Non investor is not on the list", async function () {
			await Presale.connect(addr1).invest(5);
			//console.log(Presale.isInvestor);
			expect(await Presale.isInvested(addr2.address)).to.equal(false);
		});
		it("Added to contract balance", async function () {
			const before = await Presale.balance;
			await Presale.connect(addr2).invest(5);
			const after = await PreSale.balance;
			expect(after - before).to.equal(0.005);
		});
	});
});
