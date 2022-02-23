const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
	let Token;
	let G345;
	let owner;
	let addr1;
	let addr2;
	let addrs;

	beforeEach(async function () {
		// Get the ContractFactory and Signers here.
		Token = await ethers.getContractFactory("GovernanceToken");
		[owner, addr1, addr2, ...addrs] = await ethers.getSigners();

		// To deploy our contract, we just have to call Token.deploy() and await
		// for it to be deployed(), which happens once its transaction has been
		// mined.
		G345 = await Token.deploy();
	});

	// You can nest describe calls to create subsections.
	describe("Deployment", function () {
		// `it` is another Mocha function. This is the one you use to define your
		// tests. It receives the test name, and a callback function.

		// If the callback function is async, Mocha will `await` it.
		it("Should set the right owner", async function () {
			// Expect receives a value, and wraps it in an Assertion object. These
			// objects have a lot of utility methods to assert values.

			// This test expects the owner variable stored in the contract to be equal
			// to our Signer's owner.
			expect(await G345.owner()).to.equal(owner.address);
		});

		it("Should assign the total supply of tokens to the owner", async function () {
			const ownerBalance = await G345.balanceOf(owner.address);
			expect(await G345.totalSupply()).to.equal(ownerBalance);
		});
	});

	describe("Transactions", function () {
		it("Should transfer tokens between accounts", async function () {
			// Transfer 50 tokens from owner to addr1
			await G345.transfer(addr1.address, 50);
			const addr1Balance = await G345.balanceOf(addr1.address);
			expect(addr1Balance).to.equal(50);

			// Transfer 50 tokens from addr1 to addr2
			// We use .connect(signer) to send a transaction from another account
			await G345.connect(addr1).transfer(addr2.address, 50);
			const addr2Balance = await G345.balanceOf(addr2.address);
			expect(addr2Balance).to.equal(50);
		});

		it("Should fail if sender doesn’t have enough tokens", async function () {
			const initialOwnerBalance = await G345.balanceOf(owner.address);

			// Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
			// `require` will evaluate false and revert the transaction.
			await expect(
				G345.connect(addr1).transfer(owner.address, 1)
			).to.be.revertedWith("ERC20: transfer amount exceeds balance");

			// Owner balance shouldn't have changed.
			expect(await G345.balanceOf(owner.address)).to.equal(initialOwnerBalance);
		});

		it("Should update balances after transfers", async function () {
			const initialOwnerBalance = await G345.balanceOf(owner.address);

			// Transfer 100 tokens from owner to addr1.
			await G345.transfer(addr1.address, 100);

			// Transfer another 50 tokens from owner to addr2.
			await G345.transfer(addr2.address, 50);

			// Check balances.
			const finalOwnerBalance = await G345.balanceOf(owner.address);
			expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

			const addr1Balance = await G345.balanceOf(addr1.address);
			expect(addr1Balance).to.equal(100);

			const addr2Balance = await G345.balanceOf(addr2.address);
			expect(addr2Balance).to.equal(50);
		});
	});
});
