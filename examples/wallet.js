const { ethers } = require("ethers");

(async () => {
  const wallet = ethers.Wallet.createRandom();

  console.log("address", wallet.address);
  console.log("mnemonic", wallet.mnemonic);
  console.log("privateKey", wallet.privateKey);
})();
