# Code Assessment - Initial

In this folder you will find code for a project that is
incomplete, missing features, containing bugs,
or a combination of the above.

## Task

Your task is to identify + implement to attain the
correct behaviour in this project.

Specifically:

### `block` setup part 1

Recreating the a hardhat project with updated smart contracts.

Within your local git repository,
create a new directory `04-test-smart-contract/block`.
From your submission in the previous module,
"Module 3: Write Smart Contracts",
copy the contents of `03-write-smart-contract/code-03/*`,
which is a hardhat project,
into this new directory, `04-test-smart-contract/block`.

Remove the existing smart contract in
`04-test-smart-contract/block/contracts/example.sol`.

Copy the provided (incomplete) smart contract files within this code assessment
`block/*`
into your repo at `04-test-smart-contract/block/contracts/*`.

Copy the provided (incomplete) test files within this code assessment
`block/test/*`
into your repo at `04-test-smart-contract/block/test/*`.

### `block` setup part 2

Recreating the Solidity changes in the new smart contract.

You will notice that `contracts/OneMilNftPixels.sol`
is very familiar, though not quite the same,
as `example.sol` that you worked with in the previous module,
"Module 3: Write Smart Contracts".
That is because its core logic is the same,
however, has been modified to incorporate payments
using the ERC1363 payable token standard,
where previously payments were accepted using RBTC.

As such, you will need to re-implement a
subset of the changes made in the
code assessment of the previous module
within the updated version of the same smart contract.

- Ensure dependencies are installed
  - Run `npm install` to get the dependencies in
    this new directory too
  - On top of the existing dependencies,
    will need to add a new one too,
    by running the following command:
    `npm install --save-dev erc-payable-token@4.5.0`
- Make the following changes:
  - (3) Define the `Pixel` struct such that it contains `colour` of type `bytes3` and `price` of type `uint256`
  - (4) Define an `Update` event which has a single `tokenId` parameter of type `uint24`; this event should be searchable/ filterable by its sole parameter.
  - (5) Update the constructor to also call the constructors of inherited contracts
    - Note that this will be different from before
        ERC721('OneMilNftPixels', 'NFT1MPX')
        Ownable()
  - (6) Define a `buy` function which accepts parameters:
    1. a `sender` of type `address`
    2. an `id` of type `uint24`
    3. a `colour` of type `bytes3`
    4. an `amount` of type `uint256`
  - Within the `buy` function:
    - (8) If the ~~RBTC~~ amount of tokens paid is less than the current price of the pixel plus `minPriceIncrement`,
      it should reject ; and
    - (9) if successful, assign its `price` and `colour` values.
  - (10) Define an `update` function which accepts the same 4 parameters as the `buy` function
  - Within the `update` function:
    - (12) if the ~~RBTC~~ amount of tokens paid is less than `updatePrice`,
      it should reject ; and
    - (13) if successful, assign its `colour` value; and
    - (14) finally log an `Update` event.
- Ensure that there are no compiler warnings or errors

### `block` tests

Write smart contract tests.

In the previous 2 sections,
we have been setting up the project,
but not yet focused on writing tests for smart contracts.
Now it is finally time to do so.

Look in
`04-test-smart-contract/block/test/*`
and you should see many Javascript files.
These are completed tests which tests the `OneMilNftPixels`
smart contract within the project.
However, they have been redacted using the following patterns:

(1)
Short redaction:

```javascript
/* ___ */
```

This is usually a single "word";
e.g. a variable name, function name, keyword, et cetera.
Replace these as appropriate.

(2)
Single line redaction:

```javascript
    /* __________ */
```

This is where an entire line has been redacted,
which usually means a single statement.
Replace these as appropriate.

(3)
Multiple line redaction:

```javascript
    /* __________ */
    /* __________ */
```

This is where multiple consecutive lines have been redacted,
which usually means a series of statements.
It may even be the entire implementation within a function.
Replace these as appropriate.

Above, you'll see the phrase,
"*Replace these as appropriate*" used on
all type of redactions... let's elaborate on that.
These tests are the specifications,
written in executable Javascript,
for the implementation that exists in the smart contract.
Keep that in mind while thinking about the intent of each of the tests.
This is intentionally subjective,
which mirrors the nature of writing tests in "real" projects.
Another thing to keep in mind is coverage,
what does the tests fail to cover?
Use these do decide on what the replacements
for the redacted segments should be.

*After* making all of the replacements,
ensure that you are able to run the tests,
and that **all the tests pass**.
Keep in mind the concepts behind
implementation-specification correctness -
all of your tests results should be **true positives**,
and not fall into any of the other quadrants.

## Submissions

Before you submit, check that your code functions
and meets the criteria set out above.
Once you are satisfied, refer to the
code assessment submission instructions document
available in "Module 1: Course Introduction".