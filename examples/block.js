const { ethers } = require("ethers");

(async () => {
  const provider = new ethers.providers.AlchemyProvider();
  const block = await provider.getBlock(14292113);
  console.log(block);
})();
