const { ethers } = require("ethers");
const fs = require("fs");

(async () => {
  const abi = JSON.parse(fs.readFileSync("storage_sol_SimpleStorage.abi"));

  const address = "0x4deA5308A17Bc20589802f3E2C23e79Ba044d497";
  const provider = new ethers.providers.AlchemyProvider("goerli");
  const instance = new ethers.Contract(address, abi, provider);
  console.log("address", instance.address);

  const privateKey = fs.readFileSync("privatekey").toString();
  const wallet = new ethers.Wallet(privateKey, provider);
  const instance_rw = new ethers.Contract(address, abi, wallet);
  console.log("signer ", instance_rw.signer.address);
})();
