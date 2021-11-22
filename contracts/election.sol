pragma solidity ^0.8.0;
// SPDX-License-Identifier: UNLICENSED

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        address creator;
        string summary;
    }

    constructor() {
        address currentState = msg.sender;
        addCandidate("Click Based Games",currentState, "Clicking");
        addCandidate("Keyboard Based Games",currentState, "Keyboard");
    }


    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Read/write candidates
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;
    //Store Creators
    mapping(uint => address) public creators;
    //Store summary
    mapping(uint => string) public summary;

    event votedEvent (
        uint indexed _candidateId
    );

    

    function addCandidate (string memory _name, address _creator, string memory _summary) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, _creator, _summary);
    }

    function vote (uint _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;
        // trigger voted event
        emit votedEvent(_candidateId);
    }
}