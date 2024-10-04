const { expect } = require('chai');
const { ethers } = require('hardhat');

async function deployContract(contractName, ...params) {
  const contractFactory = await ethers.getContractFactory(contractName);
  const smartContract = await contractFactory.deploy(...params);
  await smartContract.deployed();
  return smartContract;
}


describe('OneMilNftPixels - admin by non-owner - failure', () => {
  let buyerAcct;
  let lunaToken;
  let oneMilNftPixels;

  const tokensTotalSupply = 1e7;
  const minPriceIncrementOld = 10; // Lunas
  const updatePriceOld = 10;
  const minPriceIncrementNew = 20;
  const updatePriceNew = 20;

  before(async () => {
    [, buyerAcct] = await ethers.getSigners();
    lunaToken = await deployContract('LunaToken', tokensTotalSupply);
    oneMilNftPixels = await deployContract('OneMilNftPixels', lunaToken.address);
  });

  it('should not allow non-owner to perform admin function', async () => {
    const tx = oneMilNftPixels
      .connect(buyerAcct)
      .ownerAdmin(true, minPriceIncrementNew, updatePriceNew);
    await expect(tx).to.be.revertedWith('Ownable: caller is not the owner');
  });

  it('should maintain the previous min price increment after failed admin attempt', async () => {
    expect(await oneMilNftPixels.minPriceIncrement()).to.equal(minPriceIncrementOld);
  });

  it('should maintain the previous update price after failed admin attempt', async () => {
    expect(await oneMilNftPixels.updatePrice()).to.equal(updatePriceOld);
  });

  it("should have same balance in contract after failed admin attempt", async () => {
    const initialBalance = await ethers.provider.getBalance(oneMilNftPixels.address);
    await expect(
      oneMilNftPixels.connect(buyerAcct).ownerAdmin(true, minPriceIncrementNew, updatePriceNew)
    ).to.be.revertedWith("Ownable: caller is not the owner");
    const updatedBalance = await ethers.provider.getBalance(oneMilNftPixels.address);
    expect(updatedBalance).to.equal(initialBalance);
  });
});
