const fs = require("fs");
const bip39 = require("bip39");

const generateMnemonic = async () => {
  const mnemonic = await bip39.generateMnemonic();
  console.log(mnemonic);

  // Save the mnemonic to a .secret file
  fs.writeFileSync("../.secret", mnemonic); // Adjust path as necessary
  console.log("Mnemonic saved to .secret file");
};

generateMnemonic();
