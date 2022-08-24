import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import BasicMeta from "../../components/meta/BasicMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import Date from "../../components/Date";
import PostType from "../../interfaces/post";
import { fetchContent } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Post = ({
  slug,
  summary,
  title,
  contentHtml,
  date,
}: PostType & { contentHtml: any }) => {
  return (
    <div className="container mx-auto ">
      <BasicMeta
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
      />

      <article className="prose dark:prose-invert">
        <h1 className="text-3xl mb-4 mt-12">{title}</h1>
        <div className="mb-10">
          <div>
            <Date date={date} />
          </div>
          <div>{/* <Author author={getAuthor(author)} /> */}</div>
        </div>
        <MDXRemote {...contentHtml} />
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchContent<PostType>("blog").map((it) => "/blog/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const source = fs.readFileSync(`content/blog/${slug}.md`, "utf8");
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
