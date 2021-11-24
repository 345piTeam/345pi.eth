// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

contract Governance {
    uint public optionCount;
    string public proposalTitle;
    struct OptionData {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }

    mapping (uint => OptionData) options;

    OptionData[] public optionDataArray;

    constructor() public {
        address currentState = msg.sender;
        options[0] = OptionData(0, "Click-based Game", 0, currentState, "Basically cookie clicker...");
        options[1] = OptionData(1, "Keyboard-based game", 0,  currentState, "Typeracer FTW");
        options[2] = OptionData(2, "HOTAS-based game", 0,  currentState, "Elite: Dangerous or something like that");

        optionDataArray.push(options[0]);
        optionDataArray.push(options[1]);
        optionDataArray.push(options[2]);
        optionCount = 3;
        proposalTitle = "Type of game to create";
    }

    function getOptionName(uint index) public view returns(string memory) {
        return optionDataArray[index].name;
    }

    function getOptionVoteCount(uint index) public view returns(uint) {
        return optionDataArray[index].voteCount;
    }

    function getCreator() public view returns(address) {
        return optionDataArray[0].creator;
    }

    function getOptionSummary(uint index) public view returns(string memory) {
        return optionDataArray[index].summary;
    }
}
