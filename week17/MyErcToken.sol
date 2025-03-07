// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyErcToken is ERC20 , Ownable {
        constructor() ERC20("Vishesh","VD")  Ownable(msg.sender){
            _mint(msg.sender,10000000);
        }

        function mint(address account ,uint256 amount) public onlyOwner {
            _mint(account,amount);
        }
}