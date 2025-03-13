// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract LockUSDT {
    address private usdtAddress;
    mapping(address=>uint256) public pendingBalances;
    constructor (address _usdtAddress) {
        // This is a constructor
        usdtAddress = _usdtAddress;
    }
    function deposit(uint256 amt) public {
        require(IERC20(usdtAddress).allowance(msg.sender,address(this))>=amt,"Please approve the contract to spend USDT");
        IERC20(usdtAddress).transferFrom(msg.sender,address(this),amt); //smart contract should have the allowannce for it 
        pendingBalances[msg.sender]+=amt;

    }
    function withdraw() public {
        uint256 remaining_amt=pendingBalances[msg.sender];
        pendingBalances[msg.sender]=0;
        IERC20(usdtAddress).transfer(msg.sender,remaining_amt);
    }
 }
