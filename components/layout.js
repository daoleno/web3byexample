import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="font-sans flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mt-1">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        {/* Open Graph */}
        <meta property="og:title" content="Web3 by Example" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web3byexample.com" />
        <meta property="og:image" content="https://web3byexample.com/og.png" />
        <meta
          property="og:description"
          content="A collection of web3 examples"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dao_leno" />
        <meta name="twitter:creator" content="@dao_leno" />
        <meta name="twitter:title" content="Web3 by Example" />
        <meta
          name="twitter:description"
          content="A collection of web3 examples"
        />
        <meta name="twitter:image" content="https://web3byexample.com/og.png" />

        <title>Web3 by Example</title>
        <meta name="description" content="A collection of web3 examples" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
