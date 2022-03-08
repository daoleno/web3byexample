// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    event ValueChanged(
        address indexed author,
        string oldValue,
        string newValue
    );

    string _value;

    constructor(string memory value) {
        _value = value;
    }

    function getValue() public view returns (string memory) {
        return _value;
    }

    function setValue(string memory value) public {
        _value = value;
        emit ValueChanged(msg.sender, _value, value);
    }
}
