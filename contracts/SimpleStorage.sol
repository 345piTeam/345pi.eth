// SPDX-License-Identifier: MIT
pragma solidity >=0.5.11 <0.9.0;

contract SimpleStorage {
    event StorageSet(string _message);

    uint256 public storedData;

    function set(uint256 x) public {
        storedData = x;

        emit StorageSet("Data stored successfully!");
    }
}