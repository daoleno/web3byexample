const { ethers } = require("ethers");

(async () => {
  const address = "0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637";
  const isValid = ethers.utils.isAddress(address);
  console.log("isValid", isValid);

  const provider = ethers.getDefaultProvider();
  const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const code = await provider.getCode(weth);
  const isContract = code !== "0x";
  console.log("isContract", isContract);
})();
