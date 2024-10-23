# Code Assessment - Initial

In this folder you will find code for a project that is
incomplete, missing features, containing bugs,
or a combination of the above.

## Task

Your task is to identify + implement to attain the
correct behaviour in this project.

Specifically:

### `code-01`

Deploy single smart contract with Remix.

Within your local git repository,
create a new directory `06-deploy-smart-contract/code-01`.
From this code assessment, copy
`code-01/commands-and-outputs.md`
into this new directory as
`06-deploy-smart-contract/code-01/commands-and-outputs.md`.

Open Remix,
[remix.ethereum.org](https://remix.ethereum.org/)
and create a new (empty) smart contract.

Copy the contents of the sample smart contract from this code assessment, found in
`code-01/rsk-dev-course-example06-code01.sol`,
and paste that into Remix.
Deploy this smart contract to RSK Testnet.

Now edit `commands-and-outputs.md`
and make the following changes.

(1)
Copy the address that the smart contract was deployed to on RSK Testnet,
and replace `YOUR_ANSWER` with that value.

(2)
Copy the deployed bytecode for this smart contract,
and replace `YOUR_ANSWER` with that value.

(3)
Copy the hash of the RSK Testnet transaction
in which this smart contract was deployed,
and replace `YOUR_ANSWER` with that value.

(4)
Copy the data field of this deployment transaction,
and replace `YOUR_ANSWER` with that value.

(5)
Take a screenshot of Remix showing successful deployment, and save it as
`06-deploy-smart-contract/code-01/screenshot-remix.png`.

(6)
Take a screenshot of RSK Testnet Explorer, of the "Code" tab of the deployed smart contract, and save it as
`06-deploy-smart-contract/code-01/screenshot-explorer.png`.

### `block` + `code-02`

Deployment with hardhat.

Also within your local git repository,
create a new directory `06-deploy-smart-contract/code-02`.
From this code assessment, copy
`code-02/commands-and-outputs.md`
into this new directory as
`06-deploy-smart-contract/code-02/commands-and-outputs.md`.

Also within your local git repository,
create a new directory `06-deploy-smart-contract/block`.
From your submission in the previous module,
"Module 5: Secure Smart Contracts",
copy the contents of `05-secure-smart-contract/block/*`,
which is the entire hardhat project,
(that already contains the smart contracts that have been modified with security audit fixes)
into this new directory, `06-deploy-smart-contract/block/*`.

(1)
Create a deployment script named `scripts/deploy.js`.
Running this script should deploy all of the
relevant smart contracts within this project
onto RSK Testnet.

(2)
Modify `package.json` to run this deployment script via `hardhat`.

(3)
Run the deployment, and record the addresses that each
of the smart contracts were deployed to.

(4)
View the smart contract in the RSK Testnet Explorer.

Now edit `commands-and-outputs.md`
and make the following changes.

(1)
There should be multiple smart contracts deployed,
so for **each** of these smart contracts
replace `YOUR_ANSWER` with the name of the smart contract
followed by its deployed address.

(2)
Navigate to the RSK Testnet Explorer for `OneMilNftPixels`,
and then to its "Code" tab.
Take a screenshot of this, and save it as
`06-deploy-smart-contract/code-02/screenshot-explorer.png`.

## Submissions

Before you submit, check that your code functions
and meets the criteria set out above.
Once you are satisfied, refer to the
code assessment submission instructions document
available in "Module 1: Course Introduction".
