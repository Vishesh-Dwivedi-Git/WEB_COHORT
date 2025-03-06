// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract VisheshCoin {
    string public name="VisheshCoin";
    address public owner;
    uint public totalSupply;
    mapping (address => uint) public balances;
    mapping (address=>mapping(address=>uint)) public allowances;
    constructor (){
        owner=msg.sender;
    }
    modifier onlyOwner(){
        require(owner==msg.sender,"Only owner can mint the Tokens !");
        _;          
    }
    //mint
    function mint(uint amount ) public onlyOwner {
         totalSupply+=amount;
    }
    //mintTo
    function mintTo(address recep , uint amount) public onlyOwner {
        balances[recep]+=amount;
        totalSupply-=amount;
    }
    //transfer
    function transfer( address to , uint amount) public {
        require(balances[msg.sender]>=amount,"Your balance is not sufficient!");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
}