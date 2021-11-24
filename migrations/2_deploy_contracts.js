const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const Governance = artifacts.require("Governance");

module.exports = function (deployer) {
	deployer.deploy(SimpleStorage);
	deployer.deploy(ComplexStorage);
	deployer.deploy(Governance,0,"test","0x5786f97E78aD170De1a197f246a6B2fd339Db7f1","ttt");
};
