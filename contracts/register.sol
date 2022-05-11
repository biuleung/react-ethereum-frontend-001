// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Register {
    mapping(address => bool) registeredAccounts;

    address private owner;
    uint registrationFee;
    bool locked;

    event newRegistered(address registeredaccount);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event accountDeactivatd(address deactivatedAccountAddr);

    constructor(uint initRegistrationFee) {
        owner = msg.sender;
        registrationFee = initRegistrationFee;
    }

    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) public isOwner {
        address previousOwner = owner;
        require(newOwner != address(0));
        owner = newOwner;
        emit OwnershipTransferred(previousOwner, newOwner);
    }

    modifier transferFeeToOwner() {
        // require(msg.value == registrationFee, string("Amount should be equal to " + registrationFee +  " wei"));
        require(msg.value == registrationFee, string(abi.encodePacked("Amount should be equal to ", "registrationFee", " wei")));
        require(!locked, "Reentrant call.");
        locked = true;
        payable(owner).transfer(msg.value);
        locked = false;
        _;
    }

    function signup() public payable transferFeeToOwner {
        registeredAccounts[msg.sender] = true;
        emit newRegistered(msg.sender);
    }

    function getRegisteredAccount(address addr)
        public
        view
        returns (address, bool)
    {
        return (addr, registeredAccounts[addr]);
    }

    function deactivateAccount(address addr) public isOwner {
        registeredAccounts[addr] = false;
        emit accountDeactivatd(addr);
    }
}
