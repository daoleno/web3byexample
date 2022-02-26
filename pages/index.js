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
      link: "foo",
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
    <div className="max-w-screen-md flex flex-col font-mono justify-center items-center divide-y-4 divide-black">
      <p className="text-3xl uppercase font-bold mb-1">Web3 by Example</p>
      <div>
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
                  <div className="mt-2 hover:font-semibold">
                    <Link key={j} href={item.link}>
                      {item.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center my-3 pt-1">
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
