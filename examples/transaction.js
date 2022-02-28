const { ethers } = require("ethers");

(async () => {
  const txHash =
    "0x86025d602b75fadab1e2ec4f8c3d69867bb85abd665c14b739367f489799c18f";

  const provider = ethers.getDefaultProvider();

  const tx = await provider.getTransaction(txHash);
  console.log("tx", tx);

  const receipt = await provider.getTransactionReceipt(txHash);
  console.log("receipt", receipt);
})();
