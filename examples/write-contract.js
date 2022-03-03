const { ethers } = require("ethers");

(async () => {
  const abi = [
    {
      inputs: [],
      name: "get",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "x", type: "uint256" }],
      name: "set",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const address = "0x4887B56a6ec7E25e0061d58194BB76e3078153f4";
  const provider = new ethers.providers.AlchemyProvider("goerli");
  const privateKey =
    "c1edce0700e9d002c30f15f6de60eb5ffffdeb79629f663d8862aba7af3f689d";
  const wallet = new ethers.Wallet(privateKey, provider);
  const instance_rw = new ethers.Contract(address, abi, wallet);

  const tx = await instance_rw.set(42);
  console.log("hash", tx.hash);

  const receipt = await tx.wait();
  console.log("status", receipt.status);

  const value = await instance_rw.get();
  console.log("value", value.toString());
})();
