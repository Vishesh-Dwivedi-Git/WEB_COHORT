//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract sum{
    uint8 public  num=10;
    uint32 public bignum=100;
    int public negNum=-500;
    int32 public x=-100;

    bool public isActive= true;
    string public name="soliditiy contract";

    constructor(uint8 _num){
        num=_num;
    }

    function add(uint8 _value) public {
        num+=_value;
    }

    function sub(uint8 _value) public {
        num-=_value;
    }
    function mult(uint8 _value) public {
        num*=_value;
    }
    function div(uint8 _value) public {
        require(_value!=0 ,"Value cannot be 0");
        num/=_value;
    }
    function getValue() public view returns (uint) {
        return num;
    }
}
