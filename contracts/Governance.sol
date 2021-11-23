// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract Governance {
    uint public proposalCount;
    struct ElectionData {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }

    mapping (uint => ElectionData) structs1;

    ElectionData[] public electionDataArray;

    constructor() public {
        address currentState = msg.sender;
        structs1[0] = ElectionData(0, "Click-based Game", 0, currentState, "It's a click-based game");
        structs1[1] = ElectionData(1, "Keyboard-based game", 0,  currentState, "wearLevel2");

        electionDataArray.push(structs1[0]);
        electionDataArray.push(structs1[1]);
        proposalCount = 2;
    }
}
