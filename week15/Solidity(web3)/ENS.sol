// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract ENS {
    mapping(address=> string) user;
    constructor(){

    }
    function signUp(string memory userName) public {
        user[msg.sender]=userName;
    }
    function getUser() public view returns (string memory){
        return user[msg.sender];
    }
     function get() public view returns (address) {
        return msg.sender;
    }
    
}

