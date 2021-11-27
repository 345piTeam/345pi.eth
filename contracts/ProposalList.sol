pragma solidity >=0.5.16 <0.9.0;
import "./Governance.sol";

contract ProposalList {

struct Proposal{
    uint proposalID;
    string proposalName;
    address proposalCreator;
    string proposalSummary;
    Governance[] optionList;
}
uint propCount = 0;
mapping (uint => Proposal) struct2;
Proposal[] public propList;
mapping (uint => address) proposalCreators;


constructor() public{
    addProposal(0,"Game Types", msg.sender, "What type of game");
    propCount = 0;
    //struct2[0] = Proposal(0, "Click-based Game", 0, currentState, "It's a click-based game");
    //struct2[1] = Proposal(1, "Keyboard-based game", 0,  currentState, "wearLevel2");
    addProposal(0, "Game Type", msg.sender,"What kind of game do you prefer");

    propList.push(struct2[0]);
    propList.push(struct2[1]);
}

function addProposal (uint _id, string memory _name, address _creator, string memory _summary) public {
    Governance[] memory temp;
    struct2[propCount] = Proposal(_id, _name , _creator, _summary,temp);
    propCount ++;
}

function getName(uint place) public view returns(string memory) {
    return propList[place].proposalName;
}

function getOptionName(uint place, uint index) public view returns(string memory){
    return propList[place].optionList[index].getName();
}

function getOptionVoteCount(uint place, uint index) public view returns(uint) {
    return propList[place].optionList[index].getVoteCount();
}

function getCreator(uint place) public view returns(address) {
    return propList[place].proposalCreator;
}

function getOptionCreator(uint place, uint index) public view returns(address) {
    return propList[place].optionList[index].getCreator();
}

function getOptionSummary(uint place, uint index) public view returns(string memory) {
    return propList[place].optionList[index].getSummary();
}

function getSummary(uint place) public view returns(string memory) {
    return propList[place].proposalSummary;
}
} 