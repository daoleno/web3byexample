const ethers = require("ethers");

(async () => {
  const provider = ethers.getDefaultProvider("goerli");
  const privateKey = "your-private-key";
  const wallet = new ethers.Wallet(privateKey, provider);

  const tx = {
    to: "0xddB51f100672Cb252C67D516eb79931bf27cE3E6",
    value: ethers.utils.parseEther("0.1"),
  };

  const res = await (await wallet.sendTransaction(tx)).wait();

  console.log(res);
})();
