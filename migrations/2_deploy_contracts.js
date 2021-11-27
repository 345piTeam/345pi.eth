const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const Option = artifacts.require("Option");
const ProposalList = artifacts.require("ProposalList");

module.exports = function (deployer) {
	deployer.deploy(SimpleStorage);
	deployer.deploy(ComplexStorage);
	deployer.deploy(Option, 0, "Test", "Test");
	deployer.deploy(ProposalList);
};
