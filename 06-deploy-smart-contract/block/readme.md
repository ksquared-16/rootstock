# Code Assessment - Initial

In this folder you will find code for a project that is
incomplete, missing features, containing bugs,
or a combination of the above.

## Task

Your task is to identify + implement to attain the
correct behaviour in this project.

Specifically:

### `block` setup

Replicating the hardhat project.

Within your local git repository,
create a new directory `05-secure-smart-contract/block`.
From your submission in the previous module,
"Module 4: Test Smart Contracts",
copy the contents of `04-test-smart-contract/block/*`,
which is the entire hardhat project,
(that already contains both smart contract implementations,
and test specifications)
into this new directory, `05-secure-smart-contract/block`.

Copy the provided smart contracts
related to the security audit,
from the files within this code assessment
at `block/contracts/security-audit/*`
into a new directory
`05-secure-smart-contract/block/contracts/security-audit/*`.

Copy the provided (incomplete) test files
related to the security audit,
from the files within this code assessment
`block/test/security-audit/*`
into a new directory
`05-secure-smart-contract/block/test/security-audit/*`.

### `block` address security issues

View the smart contract audit file provided within this code assessment:
`one-mil-nft-pixels--security-assessment-report--v1.1.pdf`

Address **all** of the issues that have been identified in this report:
- "OMP-001 Reentrancy in withdrawCompensation function"
  - The sample exploit smart contract for this can be found in
    `block/contracts/security-audit/Exploit-OMP001.sol`.
  - The tests which check whether this exploit has, or has not,
    been addressed can be found in
    `block/test/security-audit/Exploit-OMP001.js`.
- "OMP-002 NFTs can be purchased for free"
  - This issue does not have an exploit smart contract.
  - The tests which check whether this exploit has, or has not,
    been addressed can be found in
    `block/test/security-audit/Exploit-OMP002.js`.
- "OMP-003 Frontrunners can deny purchase of NFTs"
  - The sample exploit smart contract for this can be found in
    `block/contracts/security-audit/Exploit-OMP003.sol`.
  - The tests which check whether this exploit has, or has not,
    been addressed can be found in
    `block/test/security-audit/Exploit-OMP003.js`.

Tips:
- You are expected to modify the smart contract implementations
  - This **excludes** the new ones related to the security audit.
- You are expected to run all tests,
  - This **includes** the new ones related to the security audit.
- Re-run all tests and ensure that they are passing
- Re-run the static and dynamic analysis tools as well,
  to satisfy yourself that all identified
  issues have been addressed.

## Submissions

Before you submit, check that your code functions
and meets the criteria set out above.
Once you are satisfied, refer to the
code assessment submission instructions document
available in "Module 1: Course Introduction".
