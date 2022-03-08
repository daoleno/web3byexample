const { ethers } = require("ethers");

(async () => {
  const address = "0x4deA5308A17Bc20589802f3E2C23e79Ba044d497";
  const provider = new ethers.providers.AlchemyProvider("goerli");

  const code = await provider.getCode(address);
  console.log(code);
})();
