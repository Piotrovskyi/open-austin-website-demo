import React from "react";

import { GetStaticProps } from "next";
import { count, listContent } from "../../lib/api";
import PostType from "../../interfaces/post";
import ProjectsList from "../../components/ProjectsList";
import ProjectType from "../../interfaces/project";

type Props = {
  projects: ProjectType[];
  pagination: {
    current: number;
    pages: number;
  };
};

const Projects = ({ projects = [], pagination }: Props) => {
  return (
    <ProjectsList projects={projects} pagination={pagination} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = listContent<PostType>('projects', 1, 10);

  const pagination = {
    current: 1,
    pages: Math.ceil(count('projects') / 10),
  };

  return {
    props: {
      projects,
      pagination,
    },
  };
};

export default Projects;
