import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="font-sans flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mt-1">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <main>{children}</main>
    </div>
  );
}
