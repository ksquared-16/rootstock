async function main() {
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Connected to RSK Testnet. Current block number:", blockNumber);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  