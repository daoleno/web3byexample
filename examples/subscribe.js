const { ethers } = require("ethers");

(async () => {
  const provider = new ethers.providers.AlchemyProvider();

  provider.on("block", async (blockNumber) => {
    console.log(blockNumber);
  });
})();
