const ethers = require("ethers");

(async () => {
  // A Human-Readable ABI; for interacting with the contract, we
  // must include any fragment we wish to use
  const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)",
  ];

  // This can be an address or an ENS name. We use USDC address on goerli testnet
  const usdc = "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C";
  const usdcDecimals = 6;
  const provider = ethers.getDefaultProvider("goerli");

  // Read-Only; By connecting to a Provider, allows:
  // - Any constant function
  // - Querying Filters
  // - Populating Unsigned Transactions for non-constant methods
  // - Estimating Gas for non-constant (as an anonymous sender)
  // - Static Calling non-constant methods (as anonymous sender)
  const erc20 = new ethers.Contract(usdc, abi, provider);

  const privateKey = "your-private-key";
  const wallet = new ethers.Wallet(privateKey, provider);

  // Read-Write; By connecting to a Signer, allows:
  // - Everything from Read-Only (except as Signer, not anonymous)
  // - Sending transactions for non-constant functions
  const erc20_rw = new ethers.Contract(usdc, abi, wallet);

  // Transfer 0.1 tokens to receipt
  const receipt = "0xddB51f100672Cb252C67D516eb79931bf27cE3E6";
  const amount = ethers.utils.parseUnits("0.1", usdcDecimals);
  const tx = await erc20_rw.transfer(receipt, amount);
  console.log("tx has been sent, waiting for confirmation. hash:", tx.hash);

  // Wait for the transaction to be mined...
  await tx.wait();

  console.log(
    "balance",
    ethers.utils.formatUnits(await erc20_rw.balanceOf(receipt), usdcDecimals)
  );
})();
