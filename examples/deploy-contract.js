const { ethers } = require("ethers");
const fs = require("fs");

(async () => {
  const abi = JSON.parse(fs.readFileSync("storage_sol_SimpleStorage.abi"));
  const bytecode = fs.readFileSync("storage_sol_SimpleStorage.bin").toString();

  const privateKey = fs.readFileSync("privatekey").toString();
  const provider = new ethers.providers.AlchemyProvider("goerli");
  const wallet = new ethers.Wallet(privateKey, provider);
  // The factory we use for deploying contracts
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  // Deploy an instance of the contract
  const contract = await factory.deploy("Hello, world!");
  // The address is available immediately, but the contract
  // is NOT deployed yet
  console.log("address", contract.address);
  // Wait until the transaction is mined (i.e. contract is deployed)
  //  - returns the receipt
  //  - throws on failure (the reciept is on the error)
  const receipt = await contract.deployTransaction.wait();
  console.log("receipt", receipt);
})();
