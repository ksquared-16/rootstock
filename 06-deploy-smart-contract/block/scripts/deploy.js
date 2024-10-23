const { ethers, network } = require('hardhat');

async function deployContract(name, ...params) {
    const ContractFactory = await ethers.getContractFactory(name);
    const contract = await ContractFactory.deploy(...params);
    await contract.deployed();
    console.log(`Smart contract ${name} was deployed on ${network.name} with address ${contract.address} on RSK testnet`);
    return contract;
}

async function main() {
    try {
        const initialSupply = ethers.utils.parseUnits('1000000', 18); 
        const acceptedToken = await deployContract('LunaToken', initialSupply);
        const oneMilNftPixels = await deployContract('OneMilNftPixels', acceptedToken.address);


    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

main();