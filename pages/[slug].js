import Head from "next/head";
import Link from "next/link";
import theme from "shiki/themes/material-palenight.json";
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
  const idx = flatSections.findIndex((s) => s.link === slug);
  const section = flatSections[idx];
  const nextSection =
    idx >= flatSections.length - 2 ? null : flatSections[idx + 1];

  // read the MDX file
  const mdxSource = await fs.promises.readFile(
    `./contents/${section.link}.mdx`,
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
      title: section.title || null,
      nextSection,
    },
  };
}

export default function Page({ previewSource, title, nextSection }) {
  return (
    <div className="mt-10 max-w-screen-lg mb-3">
      <Head>
        <title>{title} - Web3 by Example</title>
      </Head>
      <article className="min-w-0 flex-1 text-left divide-y-4 divide-black">
        <a
          className="text-3xl uppercase font-extrabold text-slate-900 tracking-tight"
          href="/"
        >
          Web3 by Example: {title}
        </a>
        <main className="mx-auto pt-10 text-lg text-slate-700">
          <MDXComponent code={previewSource} />
        </main>
        {nextSection && (
          <a
            className="text-md text-slate-700 hover:text-slate-900 pt-3"
            href={nextSection.link}
          >
            Next example: {nextSection.title}
          </a>
        )}
      </article>
    </div>
  );
}

function MDXComponent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
