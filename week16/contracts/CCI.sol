// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

interface IStorage{
    function getNum() external view returns (uint);
    function add() external ;
}
contract Contract2 {
    constructor(){

    }

    function proxyAdd() public {
        IStorage(0x9bF88fAe8CF8BaB76041c1db6467E7b37b977dD7).add();
    }
    function proxyGet() public view returns (uint256){
        uint256 value=IStorage(0x9bF88fAe8CF8BaB76041c1db6467E7b37b977dD7).getNum();
        return value;
    }
}

//0x9bF88fAe8CF8BaB76041c1db6467E7b37b977dD7