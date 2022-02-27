const { ethers } = require("ethers");

(async () => {
  const wallet = ethers.Wallet.createRandom();

  const keystoreJson = await wallet.encrypt("password");
  console.log("keystoreJson", keystoreJson);

  const w = await ethers.Wallet.fromEncryptedJson(keystoreJson, "password");
  console.log("address", w.address);
})();
