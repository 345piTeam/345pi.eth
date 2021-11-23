// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

contract Governance {
    uint public proposalCount;
    struct ElectionData {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }

    mapping (uint => ElectionData) struct1;

    ElectionData[] public electionDataArray;

    constructor() public {
        address currentState = msg.sender;
        struct1[0] = ElectionData(0, "Click-based Game", 0, currentState, "It's a click-based game");
        struct1[1] = ElectionData(1, "Keyboard-based game", 0,  currentState, "wearLevel2");

        electionDataArray.push(struct1[0]);
        electionDataArray.push(struct1[1]);
        proposalCount = 2;
    }

    function getName(uint index) public view returns(string memory) {
        return electionDataArray[index].name;
    }

    function getVoteCount(uint index) public view returns(uint) {
        return electionDataArray[index].voteCount;
    }

    function getCreator(uint index) public view returns(address) {
        return electionDataArray[index].creator;
    }

    function getSummary(uint index) public view returns(string memory) {
        return electionDataArray[index].summary;
    }
}
