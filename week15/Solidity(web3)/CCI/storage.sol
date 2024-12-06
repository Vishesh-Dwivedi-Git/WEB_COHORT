// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {

    uint256 number;
    constructor (uint256 num) {
        number = num;
    }
    function getNum() public view returns (uint256){
        return number;
    }

    function add() public {
        number+=1;
    }
}