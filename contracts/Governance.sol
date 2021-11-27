pragma solidity >=0.5.11 <0.9.0;

contract Governance {
    uint optionId;
    string optionName;
    uint optionVoteCount;
    address optionCreator;
    string optionSummary;

    mapping (uint => Governance) struct1;

    Governance[] public electionDataArray;

    constructor(uint _id, string memory _name, string memory _summary) public {
        optionId = _id;
        optionName = _name;
        optionVoteCount = 0;
        optionCreator = msg.sender;
        optionSummary = _summary;
    }
    function getName() public view returns(string memory) {
        return optionName;
    }
    function getVoteCount() public view returns(uint) {
        return optionVoteCount;
    }
    function getCreator() public view returns(address) {
        return optionCreator;
    }
    function getSummary() public view returns(string memory) {
        return optionSummary;
    }
}