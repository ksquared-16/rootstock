const fs = require("fs");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


// Read the mnemonic from the .secret file
const MNEMONIC = fs.readFileSync(".secret").toString().trim();

// Validate the mnemonic
if (!MNEMONIC 
  || MNEMONIC.split(' ').length < 12) {
  throw new Error('Put valid BIP-39 seed phrase in .secret');
}

const rskTestNetBlockResponse = fs
  .readFileSync('.rsk-testnet-block-rpc-response.json')
  .toString()
  .trim();
const rskTestnetMinimumGasPrice = parseInt(
  JSON.parse(rskTestNetBlockResponse).result.minimumGasPrice,
  16
);
if (typeof rskTestnetMinimumGasPrice !== 'number'
    ||isNaN(rskTestnetMinimumGasPrice)) {
  throw new Error('Unable to retrieve network gas price from file ".rsk-testnet-block-rpc-response.js"')
    }
console.log('Minimum gas price on RSK Testnet:', rskTestnetMinimumGasPrice);

const rskTestnetGasMultiplier = 1.1;

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    rskregtest: {
      url: "http://localhost:4444",
    },
    rsktestnet: {
      chainID: 31,
      url: "https://public-node.testnet.rsk.co/",
      gasPrice: rskTestnetMinimumGasPrice,
      rskGasMultiplier: rskTestnetGasMultiplier,
      accounts: {
        mnemonic: MNEMONIC,
        path: "m/44'/37310'/0'/",
        initialIndex: 0,
        count: 10,
      },
    },
  },
};
