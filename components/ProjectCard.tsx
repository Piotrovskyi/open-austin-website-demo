import React from "react";
import Image from "next/image";
import ProjectType from "../interfaces/project";

const ProjectCard = React.forwardRef(
  ({ project, onClick }: { project: ProjectType, onClick?: any }, ref) => {
    return (
      <div
        ref={ref as any}
        className="transform transition duration-500 hover:scale-105 cursor-pointer"
        onClick={onClick}
      >
        {project.screenshot && (
          <div className="col-span-4 mb-4">
            <Image
              src={project.screenshot}
              width={700}
              height={500}
              layout="responsive"
              objectFit="cover"
              alt="Project thumbnail"
            />
          </div>
        )}
        <div className="col-span-8 flex flex-col dark:text-gray-200">
          <h2 className="text-2xl mb-2">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
