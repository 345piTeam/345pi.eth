//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract DarkLord {
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function setOwner(address _owner) public onlyOwner {
        console.log("Changing owner from '%s' to '%s'", owner, _owner);
        owner = _owner;
    }

    modifier onlyOwner {
      require(msg.sender == owner, "ERROR: You are not the owner of this NFT!");
      _;
   }
}
