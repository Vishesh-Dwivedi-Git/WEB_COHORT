// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Will{
    address private  owner;
    address private recep;
    uint private lastCalled;
    uint private totalMoney;

    constructor(address _recep) payable {
        owner=msg.sender;
        recep=_recep;
        totalMoney=msg.value;
    }
    modifier onlyOwner(){
        require(msg.sender==owner, "it should not be a owner!");
        _;
    }
     
     modifier onlyRecep(){
         require(recep==msg.sender,"You are not the recipient!");
        _;
    }

    function transfer(uint money) public payable  {
        totalMoney+=money;
    }

    function recipient(address _recep) public onlyOwner {
        recep=_recep;
    }

    function ping() public onlyOwner {
        lastCalled=block.timestamp;
    }

    function drain() external  payable onlyRecep  {
        require(block.timestamp>lastCalled+365 days,"The Owner is alived and Pinged with in a Year");
        payable(recep).transfer(totalMoney);
        totalMoney=0;
    }

}