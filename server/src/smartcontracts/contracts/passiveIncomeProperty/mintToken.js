const { ethers } = require("ethers");

async function mintPassiveIncomeToken(userPrivateKey, propertyAddress, quantity) {
  const passiveIncomePropertyABI =
    require("../../ABI/PassiveIncomeProperty.json").abi;
  const passiveIncomePropertyAddress = propertyAddress

  const provider = new ethers.JsonRpcProvider();

  const privateKey = userPrivateKey
  const wallet = new ethers.Wallet(privateKey, provider);

  const passiveIncomePropertyContract = new ethers.Contract(
    passiveIncomePropertyAddress,
    passiveIncomePropertyABI,
    wallet
  );

  const usdtTokenABI = require("../../ABI/MockUSDT.json").abi;
  const usdtTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const usdtTokenContract = new ethers.Contract(
    usdtTokenAddress,
    usdtTokenABI,
    wallet
  );

  const nonce = await provider.getTransactionCount(wallet.address);
  const faucetTransaction = await usdtTokenContract
    .connect(wallet)
    .faucet(100_000, { nonce });
  faucetTransaction.wait();

  const approveTransaction = await usdtTokenContract
    .connect(wallet)
    .approve(passiveIncomePropertyAddress, ethers.parseUnits("1000000", 6), {
      nonce: nonce + 1,
    });
  approveTransaction.wait();

  const mintTransaction = await passiveIncomePropertyContract.mint(quantity, {
    nonce: nonce + 2,
  });
  mintTransaction.wait();
}

module.exports = { mintPassiveIncomeToken };
