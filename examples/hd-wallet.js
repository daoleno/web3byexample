const { ethers } = require("ethers");

(async () => {
  const mnemonic =
    "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
  const wallet = ethers.utils.HDNode.fromMnemonic(mnemonic);

  for (let i = 0; i < 3; i++) {
    const account = wallet.derivePath(`m/44'/60'/0'/0/${i}`);
    console.log(i, account.address);
  }
})();
