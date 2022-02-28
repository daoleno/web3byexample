const ethers = require("ethers");

(async () => {
  const provider = ethers.getDefaultProvider("goerli");
  const privateKey =
    "c1edce0700e9d002c30f15f6de60eb5ffffdeb79629f663d8862aba7af3f689d";
  const wallet = new ethers.Wallet(privateKey, provider);

  const tx = {
    to: "0x294B0bBc1721402Bf6d77D46aAB72C1C2C3560BD",
    value: ethers.utils.parseEther("0.1"),
  };

  const res = await (await wallet.sendTransaction(tx)).wait();

  console.log(res);
})();
