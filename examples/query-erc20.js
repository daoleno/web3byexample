const { ethers } = require("ethers");
const abi = require("./weth-abi.json");

(async () => {
  const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const provider = new ethers.providers.AlchemyProvider();
  const instance = new ethers.Contract(weth, abi, provider);

  const name = await instance.name();
  const symbol = await instance.symbol();
  const totalSupply = await instance.totalSupply();
  const decimals = await instance.decimals();
  const balance = await instance.balanceOf("vitalik.eth");
  const allowance = await instance.allowance("vitalik.eth", weth);

  console.log("weth", {
    name,
    symbol,
    totalSupply: totalSupply.toString(),
    decimals: decimals.toString(),
    balance: ethers.utils.formatEther(balance),
    allowance: allowance.toString(),
  });
})();
