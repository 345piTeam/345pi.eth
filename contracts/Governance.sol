// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

contract Governance {
    string public proposalName;
    uint proposalID;
    uint public ideaCount;
    address proposalCreator;

    struct ElectionData {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }

    mapping (uint => ElectionData) struct1;

    ElectionData[] public electionDataArray;

    constructor(uint _id, string memory _name, uint _voteCount, address _creator, string memory _summary) public {
        ideaCount = 0;
        address currentState = msg.sender;
        struct1[0] = ElectionData(1, "Keyboard-based game", 0,  currentState, "wearLevel2");
        addCandidate(0, "Keyboard-based game", currentState, "It's a keyboard-based game");
        //addCandidate(1, "Click-based Game", currentState, "It's a click-based game");
        addCandidate(_id, _name, _creator, _summary);

        electionDataArray.push(struct1[0]);
        electionDataArray.push(struct1[1]);
    }

    function addCandidate (uint _id, string memory _name, address _creator, string memory _summary) public {
        ideaCount ++;
        struct1[ideaCount] = ElectionData(_id, _name , 0 , _creator, _summary);
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
