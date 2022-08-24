import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { fetchContent } from "../lib/api";
import PostType from "../interfaces/post";
import PageType from "../interfaces/page";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Post = ({ title, contentHtml }: PostType & { contentHtml: any }) => {
  return (
    <div className="container mx-auto ">
      {/* <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={[]}
        description={summary}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={summary}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={summary}
      /> */}

      <h1 className="text-4xl mb-8 mt-12 font-bold dark:text-gray-200">
        {title}
      </h1>
      <article className="prose dark:prose-invert">
        <MDXRemote {...contentHtml} />
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchContent<PageType & { slug: string }>("pages").map(
    (it) => "/" + it.slug
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const source = fs.readFileSync(`content/pages/${slug}.md`, "utf8");
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });

  const contentHtml = await serialize(content);
  return {
    props: {
      ...data,
      contentHtml,
      slug: slug,
    },
  };
};

export default Post;
