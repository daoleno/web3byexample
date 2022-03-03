const { ethers } = require("ethers");

(async () => {
  const address = "0x4887B56a6ec7E25e0061d58194BB76e3078153f4";
  const provider = new ethers.providers.AlchemyProvider("goerli");

  const code = await provider.getCode(address);
  console.log(code);
})();
