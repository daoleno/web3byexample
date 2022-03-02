const { ethers, getDefaultProvider } = require("ethers");

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

  const bytecode =
    "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea2646970667358221220377e5066e96b387d762576dadb25e34d4a0946bc17a43f5e156e9c383ef5035d64736f6c634300080c0033";

  const provider = new ethers.providers.AlchemyProvider("goerli");
  const privateKey = "your-private-key";
  const wallet = new ethers.Wallet(privateKey, provider);

  // The factory we use for deploying contracts
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);

  // Deploy an instance of the contract
  const contract = await factory.deploy();

  // The address is available immediately, but the contract
  // is NOT deployed yet
  console.log("address", contract.address);

  // Wait until the transaction is mined (i.e. contract is deployed)
  //  - returns the receipt
  //  - throws on failure (the reciept is on the error)
  const receipt = await contract.deployTransaction.wait();
  console.log("receipt", receipt);
})();
