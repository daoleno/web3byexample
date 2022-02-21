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
      link: "#foo",
      category: "Accounts",
    },
    {
      title: "Generating New Wallets",
      link: "#foo",
      category: "Accounts",
    },
    {
      title: "Keystores",
      link: "#foo",
      category: "Accounts",
    },
    {
      title: "HD Wallet",
      link: "#foo",
      category: "Accounts",
    },
    {
      title: "Address Check",
      link: "#foo",
      category: "Accounts",
    },
  ],
  [
    {
      title: "Querying Blocks",
      link: "#foo",
      category: "Transactions",
    },
    {
      title: "Querying Transactions",
      link: "#foo",
      category: "Transactions",
    },
    {
      title: "Transferring ETH",
      link: "#foo",
      category: "Transactions",
    },
    {
      title: "Transferring Tokens (ERC-20)",
      link: "#foo",
      category: "Transactions",
    },
    {
      title: "Subscribing to New Blocks",
      link: "#foo",
      category: "Transactions",
    },
    {
      title: "Send Raw Transaction",
      link: "#foo",
      category: "Transactions",
    },
  ],
  [
    {
      title: "Smart Contract Compilation & ABI",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Deploying a Smart Contract",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Loading a Smart Contract",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Querying a Smart Contract",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Writing to a Smart Contract",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Reading Smart Contract Bytecode",
      link: "#foo",
      category: "Smart Contracts",
    },
    {
      title: "Querying an ERC20 Token Smart Contract",
      link: "#foo",
      category: "Smart Contracts",
    },
  ],
  [
    {
      title: "Subscribing to Event Logs",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading Event Logs",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading ERC-20 Token Event Logs",
      link: "#foo",
      category: "Events",
    },
    {
      title: "Reading 0x Protocol Event Logs",
      link: "#foo",
      category: "Events",
    },
  ],
  [
    {
      title: "Generating a Signature",
      link: "#foo",
      category: "Signatures",
    },
    {
      title: "Verifying a Signature",
      link: "#foo",
      category: "Signatures",
    },
  ],
  [
    {
      title: "Faucets",
      link: "#foo",
      category: "Testing",
    },
    {
      title: "Using a Simulated Client",
      link: "#foo",
      category: "Testing",
    },
  ],
];

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <ul>
        <h1 className="text-3xl">Web3 by Example</h1>
        <p className="text-xl my-5">
          Web3 is for the next generation of blockchain applications.
        </p>
        <p className="text-xl my-5">
          Web3 to interact with the Ethereum blockchain.
        </p>
        {sections.map((s, i) => (
          <li key={i} className="my-1">
            <h2 className="text-2xl">{s[0].category}</h2>
            <ul className="underline">
              {s.map((item, j) => (
                <li key={j}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="text-gray-500 my-10">
        by
        <a className="underline" href="https://twitter.com/dao_leno">
          @daoleno
        </a>
        |
        <a
          className="underline"
          href="https://github.com/daoleno/web3-by-example"
        >
          source
        </a>
        |
        <a className="underline" href="https://example.com">
          license
        </a>
      </p>
    </div>
  );
}
