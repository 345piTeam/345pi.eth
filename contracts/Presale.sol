// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "hardhat/console.sol";

contract Presale is IERC721Receiver {
    mapping(address => bool) public isInvestor;
    address public wizardNFT = 0x9A676e781A523b5d0C0e43731313A708CB607508;
    address public admin;
    uint public wizardCost = 5;
    uint public end;
    bool public finalized;
    uint public tokenId = 0;

    event NewInvestment(address investor);

    constructor() {
        admin = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
        end = block.timestamp + 7 days;
    }
    
    function invest(uint amount) public payable {
        //require(block.timestamp < end, 'too late');
        require(amount >= wizardCost/1000, "The investment minimum is 0.005 eth");
        emit NewInvestment(msg.sender);
        (bool success,) = admin.call{value: msg.value}("");
        require(success, "Failed to send money");
        IERC721(wizardNFT).safeTransferFrom(address(this), msg.sender, tokenId);
        tokenId += 1;
        isInvestor[msg.sender] = true;
    }

    function isInvested(address a) public view returns (bool) {
        return isInvestor[a];
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4){
        return IERC721Receiver.onERC721Received.selector;
    }

    function contractBalance() public view returns(uint) {
        return address(this).balance;
    }
}