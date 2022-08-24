import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import BasicMeta from "../../components/meta/BasicMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import { fetchContent } from "../../lib/api";
import ProjectType from "../../interfaces/project";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const Project = ({
  title,
  description,
  contentHtml,
  screenshot,
}: ProjectType & { contentHtml: any }) => {
  return (
    <div className="container mx-auto">
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

      <article className="prose">
        <h1 className="text-4xl mb-8 mt-12 font-bold">{title}</h1>

        <div className="mb-4">
          <Image
            src={screenshot}
            layout="responsive"
            width={655}
            height={368}
            objectFit="cover"
          />
        </div>

        <div className="prose">
          <div>{description}</div>
          <MDXRemote {...contentHtml} />
        </div>
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchContent<ProjectType>("projects").map(
    (it) => "/projects/" + it.slug
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const source = fs.readFileSync(`content/projects/${slug}.md`, "utf8");
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

export default Project;
