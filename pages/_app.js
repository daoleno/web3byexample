import "tailwindcss/tailwind.css";
import "../global.css";
import "@code-hike/mdx/dist/index.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
