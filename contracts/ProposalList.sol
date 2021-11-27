pragma solidity >=0.5.11 <0.9.0;

contract ProposalList {

    struct Proposal{
        uint id;
        string name;
        address creator;
        string summary;
        Option[] optionList;
    }
    uint propCount = 0;
    mapping (uint => Proposal) proposals;
    Proposal[] public propList;
    mapping (uint => address) proposalCreators;

    constructor() public{
        addProposal(0,"Game Types", msg.sender, "What type of game");
        propCount = 0;
        //proposals[0] = Proposal(0, "Click-based Game", 0, currentState, "It's a click-based game");
        //proposals[1] = Proposal(1, "Keyboard-based game", 0,  currentState, "wearLevel2");
        addProposal(0, "Game Type", msg.sender,"What kind of game do you prefer");

        propList.push(proposals[0]);
        propList.push(proposals[1]);
    }

    function addProposal (uint _id, string memory _name, address _creator, string memory _summary) public {
        Option[] memory temp;
        proposals[propCount] = Proposal(_id, _name , _creator, _summary,temp);
        propCount ++;
    }

    function getName(uint place) public view returns(string memory) {
        return propList[place].name;
    }

    function getOptionName(uint place, uint index) public view returns(string memory){
        return propList[place].optionList[index].getName();
    }

    function getOptionVoteCount(uint place, uint index) public view returns(uint) {
        return propList[place].optionList[index].getVoteCount();
    }

    function getCreator(uint place) public view returns(address) {
        return propList[place].creator;
    }

    function getOptionCreator(uint place, uint index) public view returns(address) {
        return propList[place].optionList[index].getCreator();
    }

    function getOptionSummary(uint place, uint index) public view returns(string memory) {
        return propList[place].optionList[index].getSummary();
    }

    function getSummary(uint place) public view returns(string memory) {
        return propList[place].summary;
    }
}

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