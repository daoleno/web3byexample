const { ethers } = require("ethers");

(async () => {
  // You can also use an ENS name for the contract address
  const daiAddress = "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60";

  // The ERC-20 Contract ABI, which is a common contract interface
  // for tokens (this is the Human-Readable ABI format)
  const daiAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",

    // Get the account balance
    "function balanceOf(address) view returns (uint)",

    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",

    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];

  const provider = new ethers.getDefaultProvider("goerli");

  // The Contract object
  const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
  // Get the balance of an address
  const balance = await daiContract.balanceOf(
    "0x67CF3bF40b2b3b3D68F6c361AEf81F8AEb2dB637"
  );

  // Format the DAI for displaying to the user
  console.log(ethers.utils.formatUnits(balance, 18));
})();
