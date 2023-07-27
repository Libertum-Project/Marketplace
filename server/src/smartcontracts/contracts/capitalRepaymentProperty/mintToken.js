const {
  capitalRepaymentPropertyContract,
  wallet,
} = require("./contractConfig");

async function mintToken() {
  const quantity = 1;
  return await capitalRepaymentPropertyContract
    .mint(quantity);
}

module.exports = { mintToken };
