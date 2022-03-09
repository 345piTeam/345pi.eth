/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Presale", function () {
	beforeEach(async function () {
		// Get the ContractFactory and Signers here.
		Pre = await ethers.getContractFactory("Presale");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
		Presale = await Pre.deploy();
        await Presale.deployed();
        
        const Wizard = await ethers.getContractFactory("Wizard");
        wizard = await Wizard.deploy();
        await wizard.deployed();
        await wizard.safeMint(Presale.address, "0");
        console.log(wizard.address);
    });
    describe("Presale Investing", function () {
        it("Added to investor list", async function () {
			await Presale.connect(addr1).invest(5);
			expect(await Presale.isInvested(addr1.address)).to.equal(true);
		});
    });
});