// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.7;

contract RskDevCourseExample06Code01V1 {
    address public deployer;
    string public constant contractType = "rsk-dev-course-example06-code01--v1";

    event Deployed(address deployer, string contractType);

    constructor() {
        deployer = msg.sender;
        emit Deployed(deployer, contractType);
    }
}
