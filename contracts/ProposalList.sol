pragma solidity >=0.5.16 <0.9.0;
import "./Governance.sol";

contract ProposalList {
struct Proposal{
    uint proposalID;
    string proposalName;
    address ProposalCreator;
}
uint propCount = 0;
mapping (uint => Governance) struct2;
Governance[] public propList;
mapping (uint => address) proposalCreators;


constructor() public{
    addProposal(0,"Game Types", msg.sender, "What type of game");

}

function addProposal (uint _id, string memory _name, address _creator, string memory _summary) public {
    propCount ++;
    struct2[propCount] = new Governance(_id, _name, _creator, _summary);
    propList.push(struct2[propCount]);
}

function getName(uint place, uint index) public view returns(string memory) {
    return propList[place].getName(index);
}

function getVoteCount(uint place, uint index) public view returns(uint) {
    return propList[place].getVoteCount(index);
}


function getCreator(uint place, uint index) public view returns(address) {
   return propList[place].getCreator(index);
}

function getSummary(uint place, uint index) public view returns(string memory) {
   return propList[place].getSummary(index);
}

}