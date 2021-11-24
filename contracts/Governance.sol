// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

contract Governance {
    uint ideaCount = 0;
    mapping (uint => ProposalData) propList;
    struct ProposalData {
        uint proposalId;
        string proposalName;
        address proposalCreator;
        string proposalSummary;
        uint proposalCount;
        mapping (uint => optionData) optionList;
        optionData[] optionDataArray;
    }

    struct optionData {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }


    constructor() public {
        
    }

    function addCandidate (uint _id, string memory _name, address _creator, string memory _summary) public {
        ideaCount ++;
        struct1[ideaCount] = ElectionData(_id, _name , 0 , _creator, _summary);
        electionDataArray.push(struct1[ideaCount]);
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
