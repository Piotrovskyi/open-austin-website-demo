import { GetStaticPaths, GetStaticProps } from "next";
import PostList from "../../../components/PostList";
import ProjectsList from "../../../components/ProjectsList";
import PostType from "../../../interfaces/post";
import ProjectType from "../../../interfaces/project";
import { count, listContent } from "../../../lib/api";

type Props = {
  projects: ProjectType[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ projects, pagination, page }: Props) {
  return <ProjectsList projects={projects} pagination={pagination} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params?.page as string);
  const projects = listContent<PostType>("projects", page, 10);
  const pagination = {
    current: page,
    pages: Math.ceil(count("projects") / 10),
  };
  return {
    props: {
      page,
      projects,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(count('projects') / 10);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
