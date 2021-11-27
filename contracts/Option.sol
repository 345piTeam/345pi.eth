pragma solidity >=0.5.11 <0.9.0;

contract Option {
    uint id;
    string name;
    uint voteCount;
    address creator;
    string summary;

    mapping (uint => Option) options;

    Option[] public optionDataArray;

    constructor(uint _id, string memory _name, string memory _summary) public {
        id = _id;
        name = _name;
        voteCount = 0;
        creator = msg.sender;
        summary = _summary;
    }
    function getName() public view returns(string memory) {
        return name;
    }
    function getVoteCount() public view returns(uint) {
        return voteCount;
    }
    function getCreator() public view returns(address) {
        return creator;
    }
    function getSummary() public view returns(string memory) {
        return summary;
    }
}