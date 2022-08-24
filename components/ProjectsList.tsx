import React from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import ProjectType from "../interfaces/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: ProjectType[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function ProjectsList({ projects, pagination }: Props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-8 mt-12 font-bold dark:text-gray-200">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {projects.map((project) => {
          return (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectCard project={project} />
            </Link>
          );
        })}
      </div>

      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? "/projects" : "/projects/page/[page]"),
          as: (page) => (page === 1 ? '' : "/projects/page/" + page),
        }}
      />
    </div>
  );
}
