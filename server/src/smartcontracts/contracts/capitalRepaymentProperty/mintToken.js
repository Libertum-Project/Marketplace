const { ethers } = require("ethers");

async function mintCapitalRepaymentToken(userPrivateKey, propertyAddress, quantity) {
  const capitalRepaymentPropertyABI =
    require("../../ABI/CapitalRepaymentProperty.json").abi;
  const capitalRepaymentPropertyAddress = propertyAddress

  const provider = new ethers.JsonRpcProvider();

  const privateKey = userPrivateKey
  const wallet = new ethers.Wallet(privateKey, provider);

  const capitalRepaymentPropertyContract = new ethers.Contract(
    capitalRepaymentPropertyAddress,
    capitalRepaymentPropertyABI,
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

  const pricePerToken = await capitalRepaymentPropertyContract.pricePerToken();
  const price = BigInt(quantity) * BigInt(pricePerToken) * BigInt(10 ** 6);

  const approveTransaction = await usdtTokenContract
    .connect(wallet)
    .approve(capitalRepaymentPropertyAddress, price, {
      nonce: nonce + 1,
    });
  approveTransaction.wait();

  const mintTransaction = await capitalRepaymentPropertyContract.mint(quantity, {
    nonce: nonce + 2,
  });
  mintTransaction.wait();
}

module.exports = { mintCapitalRepaymentToken };
