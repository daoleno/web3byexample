const { ethers } = require("ethers");

(async () => {
  const provider = ethers.getDefaultProvider();

  provider.on("block", async (blockNumber) => {
    console.log(blockNumber);
  });
})();
