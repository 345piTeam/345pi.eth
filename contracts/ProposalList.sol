// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

import "./DarkLord.sol";
import "hardhat/console.sol";

contract ProposalList {
    // ProposalList global data
    uint public propCount;
    mapping (uint => Proposal) proposals;
    Proposal[] public propList;
    mapping(uint => mapping(uint => Option))  optionList;
    DarkLord darkLord;

    struct Option{
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }
    struct Proposal{
        uint id;
        string name;
        address creator;
        string summary;
    }

    constructor() {
        propCount = 0;
        addProposal(0, "Game Types", msg.sender, "What type of game");
        addProposal(1, "Other Proposal", msg.sender, "What kind of game do you prefer");
        addOption(0,0,0, "Click-Based", "Primarily Multiple Choice and Mouse Games");
    }

    function addProposal (uint _id, string memory _name, address _creator, string memory _summary) private {
        propList.push(Proposal(_id, _name, _creator, _summary));
        propCount ++;
    }

    // Proposal getters
    function getName(uint propIndex) public view returns(string memory) {
        return propList[propIndex].name;
    }

    function getCreator(uint propIndex) public view returns(address) {
        return propList[propIndex].creator;
    }

    function getSummary(uint propIndex) public view returns(string memory) {
        return propList[propIndex].summary;
    }

    // Option getters
    function getOptionName(uint propIndex, uint index) public view returns(string memory){
        return optionList[propIndex][index].name;
    }

    function getOptionVoteCount(uint propIndex, uint index) public view returns(uint) {
        return optionList[propIndex][index].voteCount;
    }
    function getOptionCreator(uint propIndex, uint index) public view returns(address) {
        return optionList[propIndex][index].creator;
    }

    function getOptionSummary(uint propIndex, uint index) public view returns(string memory) {
        return optionList[propIndex][index].summary;
    }
    function addOption(uint propIndex, uint index, uint _id, string memory _name, string memory _summary) public{
        optionList[propIndex][index] = Option(_id, _name, 0, msg.sender, _summary);
    }
    function vote(uint propIndex, uint index) public{
        if(darkLord.isOwner(msg.sender)){
            optionList[propIndex][index].voteCount += 7;
        }
    }

    // TODO: Restrict who can call this function
    function setDarkLordAddress(address a) public {
        darkLord = DarkLord(a);
    }
}