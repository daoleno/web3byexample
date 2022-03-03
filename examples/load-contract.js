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
  const instance = new ethers.Contract(address, abi, provider);
  console.log("address", instance.address);

  const privateKey = "your-private-key";
  const wallet = new ethers.Wallet(privateKey, provider);
  const instance_rw = new ethers.Contract(address, abi, wallet);
  console.log("signer ", instance_rw.signer.address);
})();
