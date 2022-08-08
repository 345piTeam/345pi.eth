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
		//console.log(owner.address);
		PropList = await Prop.deploy();
		await PropList.deployed();
	});

	// You can nest describe calls to create subsections.
	describe("Deployment", function () {
		// `it` is another Mocha function. This is the one you use to define your
		// tests. It receives the test name, and a callback function.
		it("Initializes with correct number of proposals", async function () {
			expect(await PropList.propCount()).to.equal(7);
		});

		it("Initializes the proposals with the correct values", async function () {
			const response1 = await PropList.getProposal(0);
			expect(response1.name).to.equal("Game Types");
			expect(response1.creator).to.equal(owner.address);
			expect(response1.summary).to.equal("Genre, style, or type of video game");

			const response2 = await PropList.getProposal(1);
			expect(response2.name).to.equal("Favorite Food");
			expect(response2.creator).to.equal(owner.address);
			expect(response2.summary).to.equal(
				"Please vote for your favorite type of food"
			);
		});

		it("Initializes the options with the correct values", async function () {
			const response1 = await PropList.getOptions(0);
			const optionName1 = response1[0].name;
			const optionSummary1 = response1[0].summary;
			expect(optionName1).to.equal("FPS");
			expect(optionSummary1).to.equal("First person shooter");
			expect(response1[0].voteCount).to.equal(0);
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
			const voteCount = await PropList.getOptions(0);
			expect(voteCount[0].voteCount).to.equal(1);
		});

		it("Only allows wallets to vote once", async function () {
			await PropList.vote(0, 0);
			const voteCount = await PropList.getOptions(0);
			expect(voteCount[0].voteCount).to.equal(1);
			await expect(PropList.vote(0, 0)).to.be.revertedWith("You already voted");
		});

		// it("Cannot Cast vote if not Dark Lord", async function () {
		// 	await expect(PropList.connect(addr1).vote(0, 0)).to.be.revertedWith(
		// 		"You aren't authorized to vote"
		// 	);
		// });
	});
});
