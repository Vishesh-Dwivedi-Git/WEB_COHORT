// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Money {
    uint public totalMoney;

    constructor () payable {
        totalMoney=msg.value;
    }

    function deposit() public payable {
        totalMoney+=msg.value;
    }
    function withdraw(address payable ad) public {
        payable(ad).transfer(totalMoney);
        totalMoney=0;
    }
    function get() public view returns (uint){
        return totalMoney;
    }
}