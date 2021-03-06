import Link from "next/link";

export const sections = [
  [
    {
      title: "Account Balances",
      link: "account-balances",
      category: "Accounts",
    },
    {
      title: "Account Token Balances",
      link: "account-token-balances",
      category: "Accounts",
    },
    {
      title: "Generating New Wallets",
      link: "generating-new-wallets",
      category: "Accounts",
    },
    {
      title: "Keystores",
      link: "keystores",
      category: "Accounts",
    },
    {
      title: "HD Wallet",
      link: "hd-wallet",
      category: "Accounts",
    },
    {
      title: "Address Check",
      link: "address-check",
      category: "Accounts",
    },
  ],
  [
    {
      title: "Querying Blocks",
      link: "querying-blocks",
      category: "Transactions",
    },
    {
      title: "Querying Transactions",
      link: "querying-transactions",
      category: "Transactions",
    },
    {
      title: "Transferring ETH",
      link: "transferring-eth",
      category: "Transactions",
    },
    {
      title: "Transferring Tokens (ERC-20)",
      link: "transferring-erc20",
      category: "Transactions",
    },
    {
      title: "Subscribing to New Blocks",
      link: "subscribing-to-new-blocks",
      category: "Transactions",
    },
    {
      title: "Send Raw Transaction",
      link: "send-raw-transaction",
      category: "Transactions",
    },
  ],
  [
    {
      title: "Smart Contract Compilation & ABI",
      link: "smart-contract-compilation-abi",
      category: "Smart Contracts",
    },
    {
      title: "Deploying a Smart Contract",
      link: "deploying-a-smart-contract",
      category: "Smart Contracts",
    },
    {
      title: "Loading a Smart Contract",
      link: "loading-a-smart-contract",
      category: "Smart Contracts",
    },
    {
      title: "Querying a Smart Contract",
      link: "querying-a-smart-contract",
      category: "Smart Contracts",
    },
    {
      title: "Writing to a Smart Contract",
      link: "writing-to-a-smart-contract",
      category: "Smart Contracts",
    },
    {
      title: "Reading Smart Contract Bytecode",
      link: "reading-smart-contract-bytecode",
      category: "Smart Contracts",
    },
    {
      title: "Querying an ERC20 Token Smart Contract",
      link: "querying-an-erc20-token-smart-contract",
      category: "Smart Contracts",
    },
  ],
  [
    {
      title: "Subscribing to Event Logs(TODO)",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading Event Logs(TODO)",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading ERC-20 Token Event Logs(TODO)",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading 0x Protocol Event Logs(TODO)",
      link: "#foo",
      category: "Events",
    },
  ],
  [
    {
      title: "Generating a Signature(TODO)",
      link: "#foo",
      category: "Signatures",
    },
    {
      title: "Verifying a Signature(TODO)",
      link: "#foo",
      category: "Signatures",
    },
  ],
  [
    {
      title: "Faucets(TODO)",
      link: "#foo",
      category: "Testing",
    },
    {
      title: "Using a Simulated Client(TODO)",
      link: "#foo",
      category: "Testing",
    },
  ],
];

export default function Page() {
  return (
    <div className="max-w-screen-md flex flex-col justify-center items-center divide-y-4 divide-black">
      <p className="text-3xl uppercase font-extrabold text-slate-900 tracking-tight mb-1">
        Web3 by Example
      </p>
      <div className="text-slate-700">
        <div className="my-6 mx-auto text-lg">
          <a
            className="underline"
            href="https://a16z.com/2019/11/12/the-end-of-centralization-and-the-future-of-trust/"
          >
            Web3
          </a>{" "}
          is an idea for a new iteration of the World Wide Web based on
          blockchain technology, which incorporates concepts including
          decentralization and token-based economics.
        </div>
        <div className="my-6 mx-auto text-lg">
          Web3 by Example is a hands-on introduction to web3 development using
          annotated example programs. Check out the{" "}
          <a className="underline" href="/account-balances">
            first example
          </a>{" "}
          or browse the full list below.
        </div>

        <div>
          {sections.map((s, i) => (
            <div key={i} className="my-1">
              <div className="text-xl font-semibold mt-3">{s[0].category}</div>
              <div className="indent-4">
                {s.map((item, j) => (
                  <div className="mt-2 hover:font-semibold" key={j}>
                    <Link href={item.link}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center text-slate-900 my-3 pt-1">
        by
        <a className="underline mx-2" href="https://twitter.com/dao_leno">
          @daoleno
        </a>
        |
        <a
          className="underline mx-2"
          href="https://github.com/daoleno/web3byexample"
        >
          source
        </a>
        |
        <a
          className="underline mx-2"
          href="https://github.com/daoleno/web3byexample/blob/main/LICENSE"
        >
          license
        </a>
      </div>
    </div>
  );
}
