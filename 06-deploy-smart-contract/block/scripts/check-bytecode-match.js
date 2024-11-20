const hre = require('hardhat');
const deployedBytecodes = require('../rsk-testnet-bytecode.json');

async function checkBytecodeMatch({ name, rskBytecode }) {
    try {
        // Dynamically load the artifact for the contract
        const artifact = await hre.artifacts.readArtifact(name);
        const hardhatBytecode = artifact.deployedBytecode;

        return {
            name,
            matching: hardhatBytecode === rskBytecode, // Compare bytecodes
        };
    } catch (error) {
        return {
            name,
            matching: false,
            error: `Failed to load artifact: ${error.message}`,
        };
    }
}

async function main() {
    try {
        // Map over all deployed bytecodes and check each one
        const results = await Promise.all(deployedBytecodes.map(checkBytecodeMatch));
        console.log(results);
    } catch (error) {
        console.error('Error during bytecode matching:', error);
    }
}

main();
