import { bebas_neue } from "@/app/fonts";
import ProjectCard from "@/app/components/ProjectCard";
import { fetchProjects } from "../../../data";

export default async function ProjectPage({ params }) {
  const project = (await fetchProjects()).find((p) => p.id == params.id);

  return (
    <div className="column section is-medium" id="project">
      <h3
        className={
          "title is-4 is-hidden-desktop has-text-white has-text-centered has-text-weight-normal" +
          " " +
          bebas_neue.className
        }
      >
        Project: {project.title}
      </h3>
      <div className="container" id="projectContainer">
        <ProjectCard props={project} />
      </div>
    </div>
  );
}
