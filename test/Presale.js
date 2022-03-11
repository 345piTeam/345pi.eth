/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const provider = waffle.provider;

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
        await wizard.safeMint(Presale.address, "1");
        //console.log(wizard.address);
    });
    describe("Presale Investing", function () {
        it("Added to investor list", async function () {
            await Presale.connect(addr1).invest(5);
			expect(await Presale.isInvested(addr1.address)).to.equal(true);
        });
        it("A Non inestor is not on the list", async function () {
			expect(await Presale.isInvested(addr2.address)).to.equal(false);
        });
        it("Added to contract balance", async function () {
            const before = await provider.getBalance(Presale.address);
            await Presale.connect(addr2).invest(5);
            const after = await provider.getBalance(Presale.address);
            console.log(after);
			expect(after-before).to.equal(0.005);
		});
		it("Added to contract balance", async function () {
			const before = await Presale.balance;
			await Presale.connect(addr2).invest(5);
			const after = await PreSale.balance;
			expect(after - before).to.equal(0.005);
		});
	});
});
