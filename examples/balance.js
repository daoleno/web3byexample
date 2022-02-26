const { ethers } = require("ethers");

(async () => {
  const provider = new ethers.providers.AlchemyProvider(
    "goerli",
    process.env.API_KEY
  );
  const balance = await provider.getBalance(
    "0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637"
  );

  console.log(ethers.utils.formatEther(balance));
})();
