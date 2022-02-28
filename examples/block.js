const { ethers } = require("ethers");

(async () => {
  const provider = ethers.getDefaultProvider();
  const block = await provider.getBlock(14292113);
  console.log(block);
})();
