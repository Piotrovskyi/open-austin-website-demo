import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";
import PostType from "../interfaces/post";
import ProjectType from "../interfaces/project";
import { listContent } from "../lib/api";

const Home = ({
  posts,
  projects,
}: {
  posts: PostType[];
  projects: ProjectType[];
} & NextPage) => {
  return (
    <div className=" ">
      <div className="h-[330px] relative  text-white">
        <Image src="/images/code-across-2015-pano.png" layout="fill" alt="" />
        <div className="container flex flex-col items-center justify-center h-full">
          <h1 className="relative mb-4 text-7xl ">We are Open Austin</h1>
          <p className="relative text-xl">
            Open government, open data, and civic apps in Austin, Texas
          </p>
        </div>
      </div>

      <div className="container mx-auto dark:text-gray-200 my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center p-10 text-center">
            <div className="text-5xl mb-4">🏛️</div>
            <div className="text-lg">
              We advocate to make government work for the 21st century.
            </div>
          </div>
          <div className="flex flex-col items-center p-10 text-center">
            <div className="text-5xl mb-4">📅</div>
            <div className="text-lg">
              We host frequent meetups, hack projects and events. Join us!
            </div>
          </div>
          <div className="flex flex-col items-center p-10 text-center">
            <div className="text-5xl mb-4">🧑‍💻</div>
            <div className="text-lg">
              We develop open-source projects as a Code for America Brigade.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">
          Most recent posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <PostCard post={post} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/blog">
            <a className="btn mt-4">More posts</a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">
          Most recent projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn mt-4">More projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = listContent<PostType>("projects", 1, 3);
  const posts = listContent<PostType>("blog", 1, 3);

  return {
    props: {
      projects,
      posts,
    },
  };
};

export default Home;
