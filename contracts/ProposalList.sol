// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

import "./DarkLord.sol";
import "hardhat/console.sol";

contract ProposalList {
    // ProposalList global data
    uint public propCount;
    Proposal[] private propList;
    DarkLord private darkLord;
    mapping(uint => mapping(uint => Option)) optionMap;

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
        _initialProposal();
    }

    function _initialProposal() private {
        addProposal("Game Types", "Genre, style, or type of video game");
        addOption(0, "FPS", "First person shooter");
        addOption(0, "Horror", "Boo!");
        addOption(0, "Platformer", "Super Mario, Smash Bros, Etc.");
        addProposal("Favorite Food", "Please vote for your favorite type of food");
        addOption(1, "Pizza", "");
        addOption(1, "Burger", "");
        addOption(1, "Taco", "");
        addOption(1, "Ice Cream", "");
        addProposal("Should we liquidate? (1)", "Example liquidation vote");
        addOption(2, "Yes", "");
        addOption(2, "No", "");
        addProposal("Should we liquidate? (2)", "Example liquidation vote");
        addOption(3, "Yes", "");
        addOption(3, "No", "");
        addProposal("Should we liquidate? (3)", "Example liquidation vote");
        addOption(4, "Yes", "");
        addOption(4, "No", "");
        addProposal("Favorite Food", "Please vote for your favorite type of food");
        addOption(5, "Pizza", "");
        addOption(5, "Burger", "");
        addOption(5, "Taco", "");
        addOption(5, "Ice Cream", "");
        addProposal("Favorite Food", "Please vote for your favorite type of food");
        addOption(6, "Pizza", "");
        addOption(6, "Burger", "");
        addOption(6, "Taco", "");
        addOption(6, "Ice Cream", "");
    }

    function addProposal(string memory _name, string memory _summary) public {
        propList.push(Proposal(propCount, _name, msg.sender, _summary, 0));
        propCount ++;
    }


    // Proposal getter
    function getProposal(uint propId) public view returns(Proposal memory) {
        return propList[propId];
    }

    function getOptions(uint propId) public view returns(Option[] memory) {
        uint size = propList[propId].optionCount;
        Option[] memory optionList = new Option[](size);
        for(uint i = 0; i < size; i++) {
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
        require(_authorizedToVote(), "You aren't authorized to vote");
        optionMap[propIndex][index].voteCount += 7;
    }

    // Can be expanded for multiple NFTs
    function _authorizedToVote() private view returns(bool) {
        return darkLord.isOwner(msg.sender);
    }

    // TODO: Restrict who can call this function
    function setDarkLordAddress(address a) public {
        darkLord = DarkLord(a);
    }
}