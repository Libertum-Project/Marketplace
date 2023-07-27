const { ethers } = require("ethers");
const capitalRepaymentPropertyABI =
  require("../../ABI/CapitalRepaymentProperty.json").abi;
const capitalRepaymentPropertyAddress =
  "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
const provider = new ethers.JsonRpcProvider();

const privateKey =
  "0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e";
const wallet = new ethers.Wallet(privateKey, provider);

const capitalRepaymentPropertyContract = new ethers.Contract(
  capitalRepaymentPropertyAddress,
  capitalRepaymentPropertyABI,
  wallet
);

module.exports = {
  capitalRepaymentPropertyContract,
  wallet,
};
