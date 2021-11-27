const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const Governance = artifacts.require("Governance");

module.exports = function (deployer) {
	deployer.deploy(SimpleStorage);
	deployer.deploy(ComplexStorage);
	deployer.deploy(Governance,0,"Test", "Test");
};
