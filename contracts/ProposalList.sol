pragma solidity >=0.5.11 <0.9.0;

contract ProposalList {
    // ProposalList global data
    uint public propCount;
    mapping (uint => Proposal) proposals;
    Proposal[] public propList;
    mapping (uint => address) proposalCreators; // What is the point of this mapping?

    struct Proposal{
        uint id;
        string name;
        address creator;
        string summary;
        Option[] optionList;
    }

    constructor() public{
        propCount = 0;
        addProposal(0, "Game Types", msg.sender, "What type of game");
        addProposal(1, "Other Proposal", msg.sender, "What kind of game do you prefer");
        addOption(0,0, "Click-Based", "Do you like click games?");
    }

    function addProposal (uint _id, string memory _name, address _creator, string memory _summary) public {
        Option[] memory temp;
        propList.push(Proposal(_id, _name, _creator, _summary, temp));
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
        return propList[propIndex].optionList[index].getName();
    }

    function getOptionVoteCount(uint propIndex, uint index) public view returns(uint) {
        return propList[propIndex].optionList[index].getVoteCount();
    }

    function getOptionCreator(uint propIndex, uint index) public view returns(address) {
        return propList[propIndex].optionList[index].getCreator();
    }

    function getOptionSummary(uint propIndex, uint index) public view returns(string memory) {
        return propList[propIndex].optionList[index].getSummary();
    }
    function addOption(uint propIndex, uint _id, string memory _name, string memory _summary)  public{
        Option temp = new Option(_id, _name,_summary);
        propList[propIndex].optionList.push(temp);
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