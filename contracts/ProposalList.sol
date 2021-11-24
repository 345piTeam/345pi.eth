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

    propList.push(struct2[0]);
}

function addProposal (uint _id, string memory _name, address _creator, string memory _summary) public {
    propCount ++;
    struct2[propCount] = new Governance(_id, _name, 0, _creator, _summary);
}

function getName(uint index) public view returns(string memory) {
    return propCount[index].name;
}

function getVoteCount(uint index) public view returns(uint) {
    return propCount[index].voteCount;
}

function getCreator(uint index) public view returns(address) {
    return propCount[index].creator;
}

function getSummary(uint index) public view returns(string memory) {
    return propCount[index].summary;
}
}