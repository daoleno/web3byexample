// const ethers = require("ethers");

// (async () => {
//   const provider = new ethers.providers.AlchemyProvider("goerli");
//   const privateKey = "your-private-key";
//   const wallet = new ethers.Wallet(privateKey);

//   const rawTx = {
//     to: "0xddB51f100672Cb252C67D516eb79931bf27cE3E6",
//     value: ethers.utils.parseEther("0.1"),
//     data: ethers.utils.toUtf8Bytes("web3byexample"),
//     nonce: await provider.getTransactionCount(wallet.address),
//     gasLimit: 25000,
//     gasPrice: await provider.getGasPrice(),
//   };

//   const signedTx = await wallet.signTransaction(rawTx);
//   console.log("signedTx", signedTx);

//   const tx = await provider.sendTransaction(signedTx);
//   console.log("tx", tx);
// })();

// ---

const ethers = require("ethers");

(async () => {
  const provider = new ethers.providers.AlchemyProvider("goerli");
  const privateKey = "your-private-key";
  const wallet = new ethers.Wallet(privateKey, provider);

  const rawTx = {
    to: "0xddB51f100672Cb252C67D516eb79931bf27cE3E6",
    value: ethers.utils.parseEther("0.1"),
    data: ethers.utils.toUtf8Bytes("web3byexample"),
  };

  const tx = await wallet.sendTransaction(rawTx);
  console.log("txhash", tx.hash);
})();
