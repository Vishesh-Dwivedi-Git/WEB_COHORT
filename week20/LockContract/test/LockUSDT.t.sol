// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/LockUSDT.sol"; // Ensure this path is correct and the file exists

contract TestContract is Test {
    LockUSDT c;

    function setUp() public {
        c = new LockUSDT(address(0x123));
    }

    function testBar() public {
        assertEq(uint256(1), uint256(1), "ok");
    }

    function testFoo(uint256 x) public {
        vm.assume(x < type(uint128).max);
        assertEq(x + x, x * 2);
    }
}
