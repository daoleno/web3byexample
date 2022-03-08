const { ethers } = require("ethers");
const fs = require("fs");

(async () => {
  const abi = JSON.parse(fs.readFileSync("storage_sol_SimpleStorage.abi"));
  const address = "0x4deA5308A17Bc20589802f3E2C23e79Ba044d497";
  const provider = new ethers.providers.AlchemyProvider("goerli");
  const privateKey = fs.readFileSync("privatekey").toString();
  const wallet = new ethers.Wallet(privateKey, provider);
  const instance_rw = new ethers.Contract(address, abi, wallet);

  const tx = await instance_rw.setValue("web3byexample");
  console.log("hash", tx.hash);

  const receipt = await tx.wait();
  console.log("status", receipt.status);

  const value = await instance_rw.getValue();
  console.log("value", value.toString());
})();
