const Governance = artifacts.require("Governance");

module.exports = (deployer) => {
	deployer.deploy(Governance);
};
