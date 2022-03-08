// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    event ValueChanged(
        address indexed author,
        uint256 oldValue,
        uint256 newValue
    );

    uint256 _value;

    constructor(uint256 value) {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }

    function getValue() public view returns (uint256) {
        return _value;
    }

    function setValue(uint256 value) public {
        emit ValueChanged(msg.sender, _value, value);
        _value = value;
    }
}
