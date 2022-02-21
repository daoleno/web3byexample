import Head from "next/head";
import Link from "next/link";
import theme from "shiki/themes/one-dark-pro.json";
import fs from "fs";
import { remarkCodeHike } from "@code-hike/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";
import React, { useMemo } from "react";
import { sections } from ".";

export async function getStaticPaths() {
  const files = fs.readdirSync("./contents");
  const paths = files.map((file) => ({
    params: { slug: file.replace(".mdx", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // flat sections
  const flatSections = sections.reduce((acc, section) => {
    return [...acc, ...section];
  }, []);
  // find the section
  const section = flatSections.find((s) => s.link === slug);
  const title = section.title;
  const filename = section.link;
  // read the MDX file
  const mdxSource = await fs.promises.readFile(
    `./contents/${filename}.mdx`,
    "utf8"
  );

  const previewSource = await bundleMDX({
    source: mdxSource,
    esbuildOptions(options) {
      options.platform = "node";
      return options;
    },
    xdmOptions(options) {
      options.remarkPlugins = [[remarkCodeHike, { theme }]];
      return options;
    },
  });

  return {
    props: {
      previewSource: previewSource.code,
      title: title || null,
    },
  };
}

export default function Page({ previewSource, title }) {
  return (
    <div>
      <Head>
        <title>{title} - Web3 by Example</title>
      </Head>
      <article className="min-w-0 flex-1">
        <main
          className="mx-auto px-8 pt-4 prose-xl pb-24"
          style={{ width: "80ch", maxWidth: "80ch" }}
        >
          <h1 className="text-2xl mt-0 mb-9 text-gray-800">
            Web3 by Example: {title}
          </h1>
          <MDXComponent code={previewSource} />
        </main>
      </article>
    </div>
  );
}

function MDXComponent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
