// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// FOR DEVELOPMENT
import "hardhat/console.sol";

/// @custom:security-contact nolan@345pi.com
contract Wizard is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    mapping(address => bool) private owners;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Wizard", "WIZ") {
        //safeMint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "");
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        owners[to] = true;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) public override(ERC721) {
        super.transferFrom(from, to, tokenId);
        owners[from] = false;
        owners[to] = true;
    }

    function isOwner(address a) public view returns (bool) {
        return owners[a];
    }
}