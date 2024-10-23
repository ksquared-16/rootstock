const fs = require('fs');
const bip39 = require('bip39');

async function generateSeed() {
  const mnemonic = bip39.generateMnemonic();
  fs.writeFileSync('.rsk-testnet-seed-phrase', mnemonic);
  console.log('Mnemonic generated and saved to .rsk-testnet-seed-phrase');
}

generateSeed();