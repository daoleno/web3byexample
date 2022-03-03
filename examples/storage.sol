// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}

// pragma solidity ^0.4.24;

// contract SimpleStorage {

//     event ValueChanged(address indexed author, string oldValue, string newValue);

//     string _value;

//     constructor(string value) public {
//         emit ValueChanged(msg.sender, _value, value);
//         _value = value;
//     }

//     function getValue() view public returns (string) {
//         return _value;
//     }

//     function setValue(string value) public {
//         emit ValueChanged(msg.sender, _value, value);
//         _value = value;
//     }
// }
