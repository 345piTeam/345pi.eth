// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

import "./DarkLord.sol";
import "hardhat/console.sol";

contract ProposalList {
    // ProposalList global data
    uint public propCount;
    Proposal[] private propList;
    mapping(uint => mapping(uint => Option)) optionMap;
    DarkLord private darkLord;

    struct Option{
        uint256 id;
        string name;
        uint256 voteCount;
        address creator;
        string summary;
    }
    struct Proposal{
        uint256 id;
        string name;
        address creator;
        string summary;
        uint256 optionCount;
    }

    constructor() {
        propCount = 0;
        addProposal("Game Types", "What type of game");
        addProposal("Other Proposal", "What kind of game do you prefer");
        addOption(0, "Click-Based", "Using the mouse");
        addOption(0, "Keyboard-Based", "Using the keyboard");
    }

    function addProposal(string memory _name, string memory _summary) private {
        propList.push(Proposal(propCount, _name, msg.sender, _summary, 0));
        propCount ++;
    }


    // Proposal getter
    function getProposalData(uint id) public view returns(string memory, address, string memory, uint256) {
        return (propList[id].name, propList[id].creator, propList[id].summary, propList[id].optionCount);
    }

    function getOptions(uint propId) public view returns(Option[] memory) {
        Option[] memory optionList;
        for(uint i = 0; i < propList[propId].optionCount; i++) {
            optionList[i] = optionMap[propId][i];
        }
        return optionList;
    }

    function addOption(uint propId, string memory _name, string memory _summary) public {
        uint newOptionIndex = propList[propId].optionCount;
        optionMap[propId][newOptionIndex] = Option(newOptionIndex, _name, 0, msg.sender, _summary);
        propList[propId].optionCount += 1;
    }

    function vote(uint propIndex, uint index) public{
        require(authorizedToVote(), "You aren't authorized to vote");
        optionMap[propIndex][index].voteCount += 7;
    }

    // Can be expanded for multiple NFTs
    function authorizedToVote() private view returns(bool) {
        return darkLord.isOwner(msg.sender);
    }

    // TODO: Restrict who can call this function
    function setDarkLordAddress(address a) public {
        darkLord = DarkLord(a);
    }
}