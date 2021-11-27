const Option = artifacts.require("Option");
const ProposalList = artifacts.require("ProposalList");

module.exports = function (deployer) {
	deployer.deploy(Option, 0, "Test", "Test");
	deployer.deploy(ProposalList);
};
