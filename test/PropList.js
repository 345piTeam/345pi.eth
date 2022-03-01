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

        it("initializes with two proposals", function() {
            return PropList.deployed().then(function(instance) {
              return instance.propCount();
            }).then(function(count) {
                expect(count).to.equal(2);
            });
        });

        it("it initializes the proposals with the correct values", function() {
            return PropList.deployed().then(function(instance) {
                proposalInstance = instance
                return proposalInstance.propList(0);
            }).then(function(proposal) {
                expect(proposal.id).to.equal(0);
                expect(proposal.name).to.equal("Game Types");
                return proposalInstance.propList(1);
            }).then(function(proposal) {
                expect(proposal.id).to.equal(1);
                expect(proposal.name).to.equal("Other Proposal");
            });
         });
         it("it initializes the options with the correct values", function() {
            return PropList.deployed().then(function(instance) {
                proposalInstance = instance
                return proposalInstance;
            }).then(function(proposal) {
                expect(proposal.getOptionName(0,0)).to.equal(0);
                expect(proposal.name).to.equal("Game Types");
                return proposalInstance.propList(1);
         });
    });

    
    describe("Voting", function () {
		// `it` is another Mocha function. This is the one you use to define your
		// tests. It receives the test name, and a callback function.
        beforeEach(async () => {
            const DarkLord = await ethers.getContractFactory("DarkLord");
            darkLord = await DarkLord.deploy();
            await darkLord.deployed();
            darkLord.safeMint(owner.address, "0");
        });

        it("Dark Lord Casts Vote", async function() {
			await PropList.vote(0, 0, owner.address);
            const voteCount = await PropList.getOptionVoteCount(0,0);
			expect(voteCount).to.equal(7);
        });
        it("Cannot Cast vote if not Dark Lord", async function() {
			await PropList.vote(0, 0, addr1.address);
            const voteCount = await PropList.getOptionVoteCount(0,0);
			expect(voteCount).to.equal(0);
        });
    });
});
});