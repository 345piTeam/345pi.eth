/* eslint-disable no-undef */
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Proposal List", function () {
	beforeEach(async function () {
		// Get the ContractFactory and Signers here.
		Prop = await ethers.getContractFactory("ProposalList");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();
		// To deploy our contract, we just have to call Token.deploy() and await
		// for it to be deployed(), which happens once its transaction has been
		// mined.
		PropList = await Prop.deploy();
		await PropList.deployed();
	});

	// You can nest describe calls to create subsections.
	describe("Deployment", function () {
		// `it` is another Mocha function. This is the one you use to define your
		// tests. It receives the test name, and a callback function.
		it("Initializes with two proposals", async function () {
			expect(await PropList.propCount()).to.equal(2);
		});

		it("Initializes the proposals with the correct values", async function () {
			const response1 = await PropList.getProposalData(0);
			expect(response1[0]).to.equal("Game Types");
			expect(response1[1]).to.equal(owner.address);
			expect(response1[2]).to.equal("What type of game");

			const response2 = await PropList.getProposalData(1);
			expect(response2[0]).to.equal("Other Proposal");
			expect(response2[1]).to.equal(owner.address);
			expect(response2[2]).to.equal("What kind of game do you prefer");
		});

		it("Initializes the options with the correct values", async function () {
			const optionName = await PropList.getOptionName(0, 0);
			const optionSummary = await PropList.getOptionSummary(0, 0);
			expect(optionName).to.equal("Click-Based");
			expect(optionSummary).to.equal(
				"Primarily Multiple Choice and Mouse Games"
			);
		});
	});

	describe("Voting", function () {
		beforeEach(async () => {
			const DarkLord = await ethers.getContractFactory("DarkLord");
			darkLord = await DarkLord.deploy();
			await darkLord.deployed();
			await darkLord.safeMint(owner.address, "0");
			await PropList.setDarkLordAddress(darkLord.address);
		});
		it("Dark Lord Casts Vote", async function () {
			await PropList.vote(0, 0);
			const voteCount = await PropList.getOptionVoteCount(0, 0);
			expect(voteCount).to.equal(7);
		});
		it("Cannot Cast vote if not Dark Lord", async function () {
			await expect(PropList.connect(addr1).vote(0, 0)).to.be.revertedWith(
				"You aren't authorized to vote"
			);
		});
	});
});
