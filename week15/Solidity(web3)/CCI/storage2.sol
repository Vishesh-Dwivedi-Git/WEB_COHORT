// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract storage2{
    address owner ;
    uint number=0;
    constructor(){
        owner=msg.sender;
    }

    modifier onlyOwner(){
        require(owner==msg.sender, "You are not the owner!");
        _;
    }

    function setOwner(address newOwner) public onlyOwner {
        owner=newOwner;
    }

    function add(uint a) public onlyOwner {
        number+=a;
    }

    
    function sub(uint a) public onlyOwner{
        number-=a; 
    }
   
   
    function mul(uint a) public onlyOwner{
        number*=a;
    }

    function get() public view returns (uint){
        return number ;
    }

}